import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import Login from './Login'

const USERS_URL = 'http://localhost:3000/users';

class App extends React.Component {
  state = {
    loggedIn: false,
    username: '',
    currentUser: {}
  }

  handleInput = (e) => {
    this.setState({ username : e.target.value })
  };

  handleSubmit = (e) => {
    let loginField = document.getElementById('loginField');
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
    })//end of thens
    console.log('App state after fetch',this.state);
  };

  render() {
    return (
    <div>
      {this.state.loggedIn ? <LandingPage user={this.state.currentUser}/> : <Login username={this.state.username} handleSubmit={this.handleSubmit} handleInput={this.handleInput}/>}
    </div>
    );
  }
}

export default App;
