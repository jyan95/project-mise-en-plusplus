import React from "react";
import KitchenSideCard from "../components/KitchenSideCard";

class KitchenIndexSide extends React.Component {

  render(){
    return this.props.kitchens.map(k => <KitchenSideCard kitchen={k} key={k.id}/>)
  }
}

export default KitchenIndexSide;
