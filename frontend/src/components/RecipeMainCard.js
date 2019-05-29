import React from 'react';

const RecipeMainCard = props => {

  return (
    <div className="ui card centered ">
      {props.recipe.name}
    </div>
  )
}

export default RecipeMainCard;
