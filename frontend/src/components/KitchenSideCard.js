import React from 'react';
import { Card } from 'semantic-ui-react';

const KitchenSideCard = props => {
  const { id, name, recipes } = props.kitchen;
  return (
    <Card
      className="centered"
      onClick={() => props.showKitchenDetails(id)}
      header={name}
      meta={`Recipes: ${recipes.length}`}
    />
  )
}

export default KitchenSideCard;
