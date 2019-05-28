import React from "react";
import KitchenDetailSideCard from "../components/KitchenDetailSideCard"

class KitchenShowSide extends React.Component {
  render(){
    const { id, name, recipes } = this.props.currentKitchenShow;
    return(
      <div className="centered">
        <h1> { name } </h1>
        {recipes.map(ingredient => {
          return <KitchenDetailSideCard ingredient={ingredient}/>
        })}
      </div>
    )
  }
}

export default KitchenShowSide;
