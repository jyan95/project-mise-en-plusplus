import React from "react";
import KitchenDetailSideCard from "../components/KitchenDetailSideCard"

class KitchenShowSide extends React.Component {
  render(){
    const { id, name, recipes } = this.props.kitchen;
    return(
      <Item.Group>
        {recipes.map(r => ({
          <Item>
            <Item.Content>
              <Item.Header as='a'>{r.name}</Item.Header>
              <Item.Meta>Ingredients</Item.Meta>
              <Item.Description>
                {r.recipe_ingredients.map(ri => ri.quantity)}
              <Item.Description/>
            </Item.Content>
          </Item>
        }))}
      </Item.Group>
    )
  }
}

export default KitchenShowSide;
