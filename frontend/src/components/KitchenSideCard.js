import React from 'react';
import { Card } from 'semantic-ui-react';

const KitchenSideCard = props => {
  const { id, name, dishes } = props.kitchen;
  return (
    <Card
      onClick={() => props.showDetails(id)}
      header={name}
    />
  )
}

export default KitchenSideCard;
