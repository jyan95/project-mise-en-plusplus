import React from "react";
import KitchenShowMain from "./KitchenShowMain";
import KitchenIndexMain from "./KitchenIndexMain";

class MainContainer extends React.Component {

  renderContainer = () =>{
    switch(this.props.renderPair){
      case "kitchenIndex":
        return < KitchenIndexMain />
      case "kitchenShow":
        return < KitchenShowMain />
    }
  }

  render(){
    console.log(this.props)
    return(
      <div>
        {this.renderContainer()}
      </div>
    )
  }
}

export default MainContainer;
