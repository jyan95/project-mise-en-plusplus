import React from 'react';

const KitchenMainCard = props => {
  return (
    <div className="ui card centered">
      {props.recipe.name}
    </div>
  )
}

export default KitchenMainCard;
