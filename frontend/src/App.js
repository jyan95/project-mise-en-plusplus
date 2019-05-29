import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import Login from './Login'

class App extends React.Component {
  state = {
    signedIn: false,
    currentUser: ''
  }

  render() {
    return (
    <div>
      {this.state.signedIn ? <LandingPage user={this.state.currentUser}/> : <Login/>}
    </div>
    );
  }
}

export default App;
