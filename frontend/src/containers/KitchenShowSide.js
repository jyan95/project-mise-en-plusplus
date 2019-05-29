import React from "react";
import KitchenDetailSideCard from "../components/KitchenDetailSideCard"

class KitchenShowSide extends React.Component {


  render(){
    const { id, name, recipes } = this.props.currentKitchenShow;
    return(
      <div className="centered">
        <h1> { name }-Kitchen </h1>
        {recipes.map(ingredient => {
          return <KitchenDetailSideCard ingredient={ingredient} handleDeleteClick={this.props.handleDeleteClick}/>
        })}
      </div>
    )
  }
}

export default KitchenShowSide;
