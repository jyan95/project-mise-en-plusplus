import React from 'react';
import Navbar from './containers/Navbar';
import { Grid, Segment, Divider } from 'semantic-ui-react';

class CookingPage extends React.Component{

  render(){
    let kitchen = this.props.kitchen;


    return(
      <React.Fragment>
        <Navbar/>
        <Segment>
          <Grid>
            <Grid.Row className='ui center aligned container'>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={4}>
                To Do
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              <Divider vertical></Divider>
              <Grid.Column width={4}>
                In Progress
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              <Divider vertical></Divider>
              <Grid.Column width={4}>
                Finished
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Segment>
      </React.Fragment>
    )
  }
}

export default CookingPage;
