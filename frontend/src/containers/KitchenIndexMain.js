import React from "react";
import KitchenMainCard from "../components/KitchenMainCard";
import { Button, Card } from 'semantic-ui-react';


class KitchenIndexMain extends React.Component {

  handleKitchenClick = () => {
    this.props.changeRenderPair()
  }


  render(){

    const { name, recipes } = this.props.currentKitchenShow

    return (
      <div>
        <h1> Kitchen Details </h1>
        <h2>{ name }</h2>
          {this.props.currentKitchenShow && <Button onClick={this.handleKitchenClick}>Select Meal</Button>}
          <Card.Group>
          {this.props.currentKitchenShow &&
            recipes.map(recipe =>{
              return <KitchenMainCard recipe={recipe} key={recipe.id}/>
            })}
        </Card.Group>
      </div>
    )
  }
}

export default KitchenIndexMain;
