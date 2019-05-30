import React from 'react';
import Navbar from './containers/Navbar';
import RecipeCooking from './components/RecipeCooking';
import { Grid, Segment } from 'semantic-ui-react';

 // this.props.currentKitchenShow

class CookingPage extends React.Component{

  recipes = this.props.currentKitchenShow.recipes; //this.props.kitchen

  state = {
    todos: this.recipes.filter(r => (r.instructions.some(i => (i.progress === 1)))),
    inProgress:this.recipes.filter(r => (r.instructions.some(i => (i.progress === 2)))),
    finished:this.recipes.filter(r => (r.instructions.some(i => (i.progress === 3))))
  }


  update = () => {
    this.setState({
      todos: this.recipes.filter(r => (r.instructions.some(i => (i.progress === 1)))),
      inProgress: this.recipes.filter(r => (r.instructions.some(i => (i.progress === 2)))),
      finished: this.recipes.filter(r => (r.instructions.some(i => (i.progress === 3))))
    })
  }

  render(){
    // let kitchen = this.props.kitchen; pulled from kitchen show

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
                {this.state.todos.map(r => <RecipeCooking recipe={r} update={this.update} progress={1} key={r.id}/>)}
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={4}>
                In Progress
                {this.state.inProgress.map(r => <RecipeCooking recipe={r} update={this.update} progress={2} key={r.id}/>)}
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={4}>
                Finished
                {this.state.finished.map(r => <RecipeCooking recipe={r} update={this.update} progress={3} key={r.id}/>)}
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
