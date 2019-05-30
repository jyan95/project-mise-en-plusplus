import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import CookingPage from './CookingPage';
import api from './services/api'

class App extends React.Component {
  state = {
    page: 'LandingPage',
    currentKitchenShow: false,
    kitchens: [],
    recipes: []
  }

  handleCookClick = () => {
    this.setState({
      page: 'CookingPage',
      currentKitchenShow: {
        ...this.state.currentKitchenShow, recipes:
          this.state.currentKitchenShow.recipes.map((recipe, i)=>{
            return ({...recipe, instructions: recipe.instructions.map(instruction =>{
              return ({...instruction, progress: 1})
            })})
          })
      }
    })
  }

  handleDoneClick = () => {
    this.setState({
      page: 'LandingPage'
    })
  }

  handleAddClick = (id) => {
    api.addDish({recipe_id: id, kitchen_id: this.state.currentKitchenShow.id})
    .then(() => {
      api.getKitchens()
      .then(kitchens => {
        this.setState({
          kitchens,
          currentKitchenShow: kitchens.find(k => k.id === this.state.currentKitchenShow.id)
        })
      })
    })
  }

  handleDeleteClick = (id) => {
    alert('Recipe removed from Kitchen!')
    const dish = this.state.currentKitchenShow.dishes.find(dish=>{
      return dish.recipe_id === id && dish.kitchen_id === this.state.currentKitchenShow.id
    })
    api.deleteDish(dish.id)
    .then(() => {
      api.getKitchens()
      .then(kitchens => {
        this.setState({
          kitchens,
          currentKitchenShow: kitchens.find(k => k.id === this.state.currentKitchenShow.id)
        })
      })
    })
  }

  showKitchenDetails = id => {
    this.setState({
      currentKitchenShow: this.state.kitchens.find(kitchen => kitchen.id === id)
    })
  }

  renderPage = () => {
    switch(this.state.page){
      case "LandingPage":
        return <LandingPage
          handleCookClick={this.handleCookClick}
          currentKitchenShow={this.state.currentKitchenShow}
          showKitchenDetails={this.showKitchenDetails}
          handleAddClick={this.handleAddClick}
          handleDeleteClick={this.handleDeleteClick}
          kitchens={this.state.kitchens}
          recipes={this.state.recipes}
        />
      case "CookingPage":
        return <CookingPage currentKitchenShow={this.state.currentKitchenShow} handleDoneClick={this.handleDoneClick}/>
      default:
        return <div>Sorry Bro</div>
    }
  }


  componentDidMount(){
    api.getKitchens()
    .then(kitchens => this.setState({kitchens}))

    api.getRecipes()
    .then(recipes => this.setState({recipes}))
  } // end of fetches

  render() {
    return (
    <div>
      {this.renderPage()}
    </div>
    );
  }
}

export default App;
