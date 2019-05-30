import React from "react";
import KitchenMainCard from "../components/KitchenMainCard";
import { Button } from 'semantic-ui-react';

class KitchenIndexMain extends React.Component {

  handleKitchenClick = () => {
    this.props.changeRenderPair()
  }


  render(){

    const { name, recipes } = this.props.currentKitchenShow

    return (
      <div>
        <Timer>
          <Timer.Seconds />
        </Timer>
        <h1> Kitchen Details </h1>
        <h2>{ name }</h2>

        {this.props.currentKitchenShow && <Button onClick={this.handleKitchenClick}>Select Meal</Button>}
        {this.props.currentKitchenShow &&
          recipes.map(recipe =>{
          return <KitchenMainCard recipe={recipe} key={recipe.id}/>
        })}
      </div>
    )
  }
}

export default KitchenIndexMain;
