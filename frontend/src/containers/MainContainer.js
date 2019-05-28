import React from "react";
import KitchenShowMain from "./KitchenShowMain";
import KitchenIndexMain from "./KitchenIndexMain";

class MainContainer extends React.Component {

  renderContainer = () =>{
    switch(this.props.renderPair){
      case "kitchenIndex":
        return < KitchenIndexMain
          kitchens={this.props.kitchens}
          recipes={this.props.recipes}
          currentKitchenShow={this.props.currentKitchenShow}
        />
      case "kitchenShow":
        return < KitchenShowMain />
    }
  }

  render(){
    return(
      <div className="ui container">
        {this.renderContainer()}
      </div>
    )
  }
}

export default MainContainer;
