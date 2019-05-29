import React from 'react';
import Navbar from './containers/Navbar';
import RecipeCooking from './components/RecipeCooking';
import { Grid, Segment } from 'semantic-ui-react';

let kitchen = {
  id: 1,
  name: "French Southern Territories",
  recipes: [
    {
      id: 1,
      name: "French Fries with Sausages",
      ingredients: [
        {
          id: 93,
          ingredient: "Blue Eye Trevalla",
          quantity: "1/4 teaspoon"
        },
        {
          id: 149,
          ingredient: "Spearmint",
          quantity: "3 gallon"
        },
        {
          id: 181,
          ingredient: "Plums",
          quantity: "1/3 teaspoon"
        },
        {
          id: 182,
          ingredient: "Garlic",
          quantity: "2 gallon"
        }
      ],
      instructions: [
        {
          id: 19,
          recipe_id: 1,
          stage: 1,
          action: "agree",
          duration: 113,
          created_at: "2019-05-29T13:34:42.145Z",
          updated_at: "2019-05-29T13:34:42.145Z"
        },
        {
          id: 81,
          recipe_id: 1,
          stage: 1,
          action: "omit",
          duration: 285,
          created_at: "2019-05-29T13:34:42.342Z",
          updated_at: "2019-05-29T13:34:42.342Z"
        },
        {
          id: 97,
          recipe_id: 1,
          stage: 1,
          action: "humiliate",
          duration: 155,
          created_at: "2019-05-29T13:34:42.405Z",
          updated_at: "2019-05-29T13:34:42.405Z"
        },
        {
          id: 123,
          recipe_id: 1,
          stage: 1,
          action: "sow",
          duration: 84,
          created_at: "2019-05-29T13:34:42.501Z",
          updated_at: "2019-05-29T13:34:42.501Z"
        }
      ]
    },
    {
      id: 2,
      name: "Pineapple Trout Rice",
      ingredients: [
        {
          id: 95,
          ingredient: "Rice",
          quantity: "1/4 teaspoon"
        },
        {
          id: 102,
          ingredient: "Rosemary",
          quantity: "3 gallon"
        },
        {
          id: 1073,
          ingredient: "Trout",
          quantity: "1/3 teaspoon"
        },
        {
          id: 1234,
          ingredient: "Pineapple",
          quantity: "2 gallon"
        }
      ],
      instructions: [
        {
          id: 124,
          recipe_id: 1,
          stage: 1,
          action: "boil",
          duration: 113,
          created_at: "2019-05-29T13:34:42.145Z",
          updated_at: "2019-05-29T13:34:42.145Z"
        },
        {
          id: 457,
          recipe_id: 1,
          stage: 1,
          action: "slice",
          duration: 285,
          created_at: "2019-05-29T13:34:42.342Z",
          updated_at: "2019-05-29T13:34:42.342Z"
        },
        {
          id: 908,
          recipe_id: 1,
          stage: 1,
          action: "salt",
          duration: 155,
          created_at: "2019-05-29T13:34:42.405Z",
          updated_at: "2019-05-29T13:34:42.405Z"
        },
        {
          id: 1233,
          recipe_id: 1,
          stage: 1,
          action: "cut",
          duration: 84,
          created_at: "2019-05-29T13:34:42.501Z",
          updated_at: "2019-05-29T13:34:42.501Z"
        }
      ]
    }
  ]
};

class CookingPage extends React.Component{
  constructor(props){
    super(props);
    let { recipes } = kitchen; //this.props.kitchen
    this.state = {
      todos: recipes.filter(r => (r.instructions.some(i => (i.stage === 1)))),
      inProgress:recipes.filter(r => (r.instructions.some(i => (i.stage === 2)))),
      finished:recipes.filter(r => (r.instructions.some(i => (i.stage === 3))))
    }
  }

  update = () => {
    this.setState({
      todos: kitchen.recipes.filter(r => (r.instructions.some(i => (i.stage === 1)))),
      inProgress: kitchen.recipes.filter(r => (r.instructions.some(i => (i.stage === 2)))),
      finished: kitchen.recipes.filter(r => (r.instructions.some(i => (i.stage === 3))))
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
                {this.state.todos.map(r => <RecipeCooking recipe={r} update={this.update} stage={1} key={r.id}/>)}
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={4}>
                In Progress
                {this.state.inProgress.map(r => <RecipeCooking recipe={r} update={this.update} stage={2} key={r.id}/>)}
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={4}>
                Finished
                {this.state.finished.map(r => <RecipeCooking recipe={r} update={this.update} stage={3} key={r.id}/>)}
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
