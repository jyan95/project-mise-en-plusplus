import React from "react";
import KitchenMainCard from "../components/KitchenMainCard";

class KitchenIndexMain extends React.Component {

  handleKitchenClick = () => {
    this.props.changeRenderPair()
  }


  render(){

    const { id, name, recipes } = this.props.currentKitchenShow

    return (
      <div>
        <h1> Kitchen Details </h1>
        <h2>{ name }</h2>

        {this.props.currentKitchenShow && <button onClick={this.handleKitchenClick}>Edit Meal</button>}
        {this.props.currentKitchenShow &&
          recipes.map(recipe =>{
          return <KitchenMainCard recipe={recipe} />
        })}
      </div>
    )
  }
}

export default KitchenIndexMain;
