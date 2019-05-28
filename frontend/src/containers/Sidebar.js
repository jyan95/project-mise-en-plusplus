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
        return <KitchenIndexSide kitchens={kitchens}/>
      // case 'kitchenShow':
      //   return <KitchenDetailSideCard />;
      default:
        return <KitchenIndexSide kitchens={kitchens}/>
    }
  }

  render(){
    return(
      <div className='ui items'>
        <header>
          Your Kitchens:
        </header>
        {this.renderSidebar()}
      </div>
    )
  }
}

export default Sidebar;
