import React from 'react';
import Navbar from './containers/Navbar';
import {Grid} from 'semantic-ui-react';

import MainContainer from './containers/MainContainer';
import Sidebar from './containers/Sidebar';
import api from './services/api'

class LandingPage extends React.Component {
  state = {
    currentUser: 'josh',
    signedIn: true,
    renderPair: 'kitchenIndex',
    // if kitchenIndex = kitchens index in sidebar and welcome message in MainContainer
    // if kitchenShow = kitchen show in sidebar and recipes in MainContainer
    kitchens: [],
    recipes: [],
    currentKitchenShow: false
  }

  showKitchenDetails = id => {
    this.setState({
      currentKitchenShow: this.state.kitchens.find(kitchen => kitchen.id === id)
    })
  }

  handleAddClick = (id) => {
    const recipe = this.state.recipes.find(recipe => {
      return recipe.id === id
    })

    api.addRecipe({recipe_id: id, kitchen_id: this.state.currentKitchenShow.id})
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
    console.log(id)
    console.log(
      'hi'
    )
  }

  changeRenderPairToIndex= () => {
    this.setState({
      renderPair: 'kitchenIndex'
    })
  }

  changeRenderPair = () =>{
    this.setState({
      renderPair: 'kitchenShow'
    })
  }



  componentDidMount(){
    api.getKitchens()
    .then(kitchens => this.setState({kitchens}))

    api.getRecipes()
    .then(recipes => this.setState({recipes}))
  } // end of fetches


  render() {
    return (
      <React.Fragment>

        <Navbar
          user = {this.state.currentUser}
          changeRenderPairToIndex = {this.changeRenderPairToIndex}
        />
        <Grid>
          <Grid.Row className="ui center aligned container">
            <Grid.Column width={5}>
              <Sidebar
                handleDeleteClick={this.handleDeleteClick}
                renderPair={this.state.renderPair}
                kitchens={this.state.kitchens}
                recipes={this.state.recipes}
                showKitchenDetails={this.showKitchenDetails}
                currentKitchenShow={this.state.currentKitchenShow}
              />
            </Grid.Column>
            <Grid.Column width={11}>
              < MainContainer
                handleAddClick={this.handleAddClick}
                renderPair={this.state.renderPair}
                kitchens={this.state.kitchens}
                recipes={this.state.recipes}
                currentKitchenShow={this.state.currentKitchenShow}
                changeRenderPair={this.changeRenderPair}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default LandingPage;
