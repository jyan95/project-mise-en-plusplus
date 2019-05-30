import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import CookingPage from './CookingPage';
import Login from './Login';
import api from './services/api';

const USERS_URL = 'http://localhost:3000/users';

class App extends React.Component {
  state = {
    loggedIn: false,
    username: '',
    currentUser: {},
    page: 'LandingPage',
    currentKitchenShow: false,
    kitchens: [],
    recipes: []
  };

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
  };

  handleDoneClick = () => {
    this.setState({
      page: 'LandingPage'
    })
  };

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
  };

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
  };

  showKitchenDetails = id => {
    this.setState({
      currentKitchenShow: this.state.kitchens.find(kitchen => kitchen.id === id)
    })
  }


  handleInput = (e) => {
    this.setState({ username : e.target.value })
  };

  handleSubmit = (e) => {
    // let loginField = document.getElementById('loginField');
    // console.log('input field in App', loginField.value)
    // console.log('posting in App', this.state);
    fetch(USERS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({username:this.state.username})
    })
    .then(r => r.json())
    .then(data => {
      console.log(data);
      this.setState({
        loggedIn: true,
        username: '',
        currentUser: data
      })
      console.log('App state after fetch',this.state);
    })//end of thens
  };

  logout = () => {
    this.setState({loggedIn: false})
  };

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
          handleLogout={this.logout}
          currentUser={this.state.currentUser}
        />
      case "CookingPage":
        return <CookingPage
          currentKitchenShow={this.state.currentKitchenShow} handleDoneClick={this.handleDoneClick}
          currentUser={this.state.currentUser}
        />
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
      {this.state.loggedIn ? this.renderPage() : <Login username={this.state.username} handleSubmit={this.handleSubmit} handleInput={this.handleInput}/>}
    </div>
    );
  }
}

export default App;
