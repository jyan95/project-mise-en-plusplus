import React from 'react';
// import Navbar from './Navbar';
// import MainContainer from './containers/MainContainer';
// import Sidebar from './containers/Sidebar';

const KITCHENS = 'http://localhost:3000/kitchens';
const RECIPES = 'http://localhost:3000/recipes';

class LandingPage extends React.Component {
  state = {
    currentUser: 'josh',
    signedIn: true,
    renderPair: 'kitchenIndex',
    // if kitchenIndex = kitchens index in sidebar and welcome message in MainContainer
    // if kitchenShow = kitchen show in sidebar and recipes in MainContainer
    kitchens: [];
    recipes: [];
  }

  function shuffleArray(arr){
    for(let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };
  }

  componentDidMount(){
    fetch(KITCHENS)
    .then(r => r.json())
    .then(console.log)
    .then(data => {
      let kitchens = data.filter(k => k.user === this.state.currentUser);
      this.setState({kitchens: kitchens.slice(0,9)});
    });

    fetch(RECIPES)
    .then(r => r.json())
    .then(console.log)
    .then(data => {
      let recipes = shuffleArray(data).slice(0,19);
      this.setState({recipes: recipes})
    });
  } // end of fetches


  render() {
    // add to return when ready:
    // <Navbar user = {this.state.currentUser}/>
    // <Sidebar kitchens = {this.state.kitchens} recipes = {this.state.recipes} renderPair = {this.state.renderPair}/>
    // <MainContainer kitchens = {this.state.kitchens} recipes = {this.state.recipes} renderPair = {this.state.renderPair/>
    return (
      <div>


      </div>
    )
  }
}
