import React from 'react';

const KitchenDetailSideCard = props => {

  const { id, name, ingredients } = props.ingredient;


  return (

    <div className="ui card centered ">
      <h2>{ name }</h2>
      {ingredients.map(ingredient => {
        return <li>{ingredient.ingredient}</li>
      })}
    </div>
  )
}

export default KitchenDetailSideCard;
