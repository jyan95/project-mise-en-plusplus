import React from 'react';
// import Navbar from './Navbar';
// import KitchenContainer from './KitchenContainer';

const API = 'http://localhost:3000';

class LandingPage extends React.Component {
  state = {
    signedIn: true,
    sidebar: 'kitchens',
    index: 'recipes'
  }

  componentDidMount(){
    fetch(API)
  }
}
