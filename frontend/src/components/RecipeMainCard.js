import React from 'react';
import RecipePopup from './RecipePopup'
import { Button, Icon, Card, Popup } from 'semantic-ui-react'



const RecipeMainCard = props => {

  return (

    <div className="ui card centered ">
      <div className="ui right labeled button" role="button" tabIndex="0">
        <button className="ui icon button" onClick={() => props.handleAddClick(props.recipe.id)}>
          <i aria-hidden="true" className="add icon"></i>
        </button>
        <Popup
          content=
          {  <div>
              <h5>Ingredients</h5>
              {props.recipe.ingredients.map(ingredient =>{
                return <li>{ingredient.ingredient}</li>
              })}
              <h5>Instructions</h5>
              {props.recipe.instructions.map(instruction =>{
                return <li>{instruction.action}</li>
              })}
            </div>}
          key={props.recipe.name}
          header={props.recipe.name}
          trigger={<a className="ui basic label">{props.recipe.name}</a>} wide='very'
        />
      </div>
    </div>
  )
}

export default RecipeMainCard;
