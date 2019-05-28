import React from 'react';
import { Card } from 'semantic-ui-react';

const KitchenSideCard = props => {
  const { id, name, recipes } = props.kitchen;
  return (
    <Card
      onClick={() => props.showDetails(id)}
      header={name}
      meta={recipes.length}
    />
  )
}

export default KitchenSideCard;
