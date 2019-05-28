import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import CookingPage from './CookingPage';

class App extends React.Component {
  state = {
    page: 'LandingPage'
  }

  render() {
    return (
    <div>
      <CookingPage kitchen={this.state.kitchen}/>
    </div>
    );
  }
}

export default App;
