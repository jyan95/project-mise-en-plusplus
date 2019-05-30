import React from 'react';

const KitchenMainCard = props => {
  return (
    <div className="ui raised card centered ">
      <h2>{props.recipe.name}</h2>
      {props.recipe.ingredients.map(ingredient => {
        return <li>{ingredient.ingredient}</li>
      })}
    </div>
  )
}

export default KitchenMainCard;
