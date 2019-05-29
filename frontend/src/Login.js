import React from 'react';
import { Form, Button, Grid, Header, Segment } from 'semantic-ui-react';

const USERS_URL = 'http://localhost:3000/users';

class Login extends React.Component{
  state = {
    username: '',
    currentUser: ''
  };

  handleInput = (e) => {
    this.setState({ username : e.target.value })
  };

  handleSubmit = () => {
    console.log('posting', this.state)
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
        username: '',
        currentUser: data.username
      })
    })//end of thens
  };

  render() {
    console.log('current user: ',this.state.currentUser);
    const { username } = this.state;
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='grey' textAlign='center'>
             welcome to mise en ++
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input placeholder='username' name='username' value={username} onChange={this.handleInput} />
              <Button type='submit' color='red' fluid size='large'>
                login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Login;
