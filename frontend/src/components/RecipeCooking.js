import React from 'react';
import { Container } from 'semantic-ui-react';

class RecipeCooking extends React.Component{
  render(){
    const { id, name, ingredients } = this.props.recipe;
    return(
      <Container>
        <Header as='h3'>{name}</Header>
        {ingredients.map(i => ({
          <Ingredient ingredient={i}/>
        }))}
      <Container/>
    )
  }
}
