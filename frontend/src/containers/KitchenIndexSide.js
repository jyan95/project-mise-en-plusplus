import React from "react";
import KitchenSideCard from "../components/KitchenSideCard";
import './Sidebar.css'

class KitchenIndexSide extends React.Component {

  render(){
    return (
      <div className="ui-items">
        <h1>
          Your Kitchens
        </h1>
        {this.props.kitchens.map(k => {
          return <KitchenSideCard
            kitchen={k}
            key={k.id}
            showKitchenDetails={this.props.showKitchenDetails}
          />
        })}
      </div>
    )
  }
}

export default KitchenIndexSide;
