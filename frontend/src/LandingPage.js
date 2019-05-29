import React from 'react';
import Navbar from './containers/Navbar';
import {Grid} from 'semantic-ui-react';

import MainContainer from './containers/MainContainer';
import Sidebar from './containers/Sidebar';

const KITCHENS_URL = 'http://localhost:3000/kitchens';
const RECIPES_URL = 'http://localhost:3000/recipes';

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
    },()=>console.log(this.state.currentKitchenShow))
  }

  shuffleArray(arr){
    for(let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  changeRenderPair = () =>{
    this.setState({
      renderPair: 'kitchenShow'
    })
  }






  componentDidMount(){
    fetch(KITCHENS_URL)
    .then(r => r.json())
    .then(data => {
      this.setState({kitchens: data})
    })

    fetch(RECIPES_URL)
    .then(r => r.json())
    .then(data => {
      this.setState({recipes: data}, ()=> console.log(this.state.recipes))
    })
  } // end of fetches


  render() {
    // add to return when ready:
    //
    // <Sidebar kitchens = {this.state.kitchens} recipes = {this.state.recipes} renderPair = {this.state.renderPair}/>
    // <MainContainer kitchens = {this.state.kitchens} recipes = {this.state.recipes} renderPair = {this.state.renderPair/>
    return (
      <React.Fragment>
        
        <Navbar user = {this.state.currentUser}/>
        <Grid>
          <Grid.Row className="ui center aligned container">
            <Grid.Column width={5}>
              <Sidebar
                renderPair={this.state.renderPair}
                kitchens={this.state.kitchens}
                recipes={this.state.recipes}
                showKitchenDetails={this.showKitchenDetails}
                currentKitchenShow={this.state.currentKitchenShow}
              />
            </Grid.Column>
            <Grid.Column width={11}>
              < MainContainer
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
