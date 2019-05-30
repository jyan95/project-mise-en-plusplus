import React from 'react';
import { Form, Button, Grid, Header, Segment } from 'semantic-ui-react';

// class Login extends React.Component{
//   render() {
//     return (
//       <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
//         <Grid.Column style={{ maxWidth: 450 }}>
//           <Header as='h2' color='grey' textAlign='center'>
//              welcome to mise en ++
//           </Header>
//           <Form size='large' onSubmit={this.props.handleSubmit}>
//             <Segment stacked>
//               <Form.Input id='loginField' placeholder='username' name='username' value={this.props.username} onChange={this.props.handleInput} />
//               <Button type='submit' color='red' fluid size='large'>
//                 login
//               </Button>
//             </Segment>
//           </Form>
//         </Grid.Column>
//       </Grid>
//     )
//   }
// }

const Login = (props) => {
  return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='grey' textAlign='center'>
           welcome to mise en ++
        </Header>
        <Form size='large' onSubmit={props.handleSubmit}>
          <Segment stacked>
            <Form.Input id='loginField' placeholder='username' name='username' value={props.username} onChange={props.handleInput} />
            <Button type='submit' color='red' fluid size='large'>
              login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default Login;
