import React from 'react';
import { Grid } from 'semantic-ui-react';

const KitchenMainCard = props => {
  //console.log(props.recipe)
  return (

    <div className="ui raised card">
      <div className='content'>
        <div className='center aligned header'>{props.recipe.name}</div>
        <div className='left aligned description'>
          <Grid>
            <Grid.Column width={8}>
              <h4>Ingredients:</h4>
              {props.recipe.ingredients.map(ingredient => {
                return <li key ={ingredient.id}>{ingredient.ingredient}</li>
              })}
            </Grid.Column>
            <Grid.Column width={8}>
              <h4>Instructions:</h4>

              {props.recipe.instructions.map(instruction => {
                return <li key ={instruction.id}>{instruction.action}</li>
              })}
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default KitchenMainCard;
