import React from "react";
import KitchenShowSide from './KitchenShowSide';
import KitchenIndexSide from './KitchenIndexSide';


class Sidebar extends React.Component {

  findKitchen(id){
    return this.props.kitchens.find(k => k.id === id);
  }

  renderSidebar = () => {
    let kitchens = this.props.kitchens;
    switch (this.props.renderPair) {
      case 'kitchenIndex':
        return <KitchenIndexSide kitchens={kitchens} showKitchenDetails={this.props.showKitchenDetails}/>
      // case 'kitchenShow':
      //   return <KitchenDetailSideCard />;
      default:
        return <KitchenIndexSide kitchens={kitchens}/>
    }
  }

  render(){
    return(
      <div className='ui items'>
        <h1>
          Your Kitchens
        </h1>
        {this.renderSidebar()}
      </div>
    )
  }
}

export default Sidebar;
