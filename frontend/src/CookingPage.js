import React from 'react';
import Navbar from './containers/Navbar';
import RecipeCooking from './components/RecipeCooking';
import { Grid, Segment } from 'semantic-ui-react';

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
                {kitchen.recipes.map(r => ({
                  <RecipeCooking recipe={r}/>
                }))}
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={4}>
                In Progress
                {kitchen.recipes.map(r => ({
                  <RecipeCooking recipe={r}/>
                }))}
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={4}>
                Finished
                {kitchen.recipes.map(r => ({
                  <RecipeCooking recipe={r}/>
                }))}
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
