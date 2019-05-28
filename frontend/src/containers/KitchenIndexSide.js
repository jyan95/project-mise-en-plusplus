import React from "react";
import KitchenSideCard from "../components/KitchenSideCard";

class KitchenIndexSide extends React.Component {

  render(){
    return this.props.kitchens.map(k => {
      return <KitchenSideCard
        kitchen={k}
        key={k.id}
        showKitchenDetails={this.props.showKitchenDetails}
      />
    })
  }
}

export default KitchenIndexSide;
