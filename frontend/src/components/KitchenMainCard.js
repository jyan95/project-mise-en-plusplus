import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const KitchenMainCard = props => {
  console.log(props.recipe)
  return (
    <Card className="ui centered card">
      <h2>{props.recipe.name}</h2>
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
    </Card>
  )
}

export default KitchenMainCard;
