import React from 'react';
import { Button, Popup } from 'semantic-ui-react';



const RecipeMainCard = props => {

  return (

    <div className="ui raised card centered">
      <div className="ui right labeled button" role="button" tabIndex="0">
        <Button className="ui icon button" onClick={() => props.handleAddClick(props.recipe.id)}>
          <i aria-hidden="true" className="add icon"></i>
        </Button>
        <Popup
          content=
          {  <div>
              <h5>Ingredients</h5>
              {props.recipe.ingredients.map(ingredient =>{
                return <li key={ingredient.id}>{ingredient.ingredient}</li>
              })}
              <h5>Instructions</h5>
              {props.recipe.instructions.map(instruction =>{
                return <li key={instruction.id}>{instruction.action}</li>
              })}
            </div>}
          key={props.recipe.name}
          header={props.recipe.name}
          trigger={<div className="ui basic label">{props.recipe.name}</div>} wide='very'
        />
      </div>
    </div>
  )
}

export default RecipeMainCard;
