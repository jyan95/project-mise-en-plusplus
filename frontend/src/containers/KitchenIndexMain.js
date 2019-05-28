import React from "react";
import KitchenMainCard from "../components/KitchenMainCard";

class KitchenIndexMain extends React.Component {

  render(){
    return (
      <div>
        <h1> Recipes </h1>
        {this.props.recipes.map(recipe => {
          return <KitchenMainCard recipe={recipe} key={recipe.id}/>
        })}
      </div>
    )
  }
}

export default KitchenIndexMain;
