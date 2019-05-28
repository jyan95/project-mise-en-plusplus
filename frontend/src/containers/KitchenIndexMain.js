import React from "react";
import KitchenMainCard from "../components/KitchenMainCard";

class KitchenIndexMain extends React.Component {


  render(){
    const { id, name, recipes } = this.props.currentKitchenShow
    console.log(this.props)
    return (
      <div>
        <h1> Kitchen Details </h1>
        { name }
      </div>
    )
  }
}

export default KitchenIndexMain;
