import React from "react";
import KitchenShowSide from './KitchenShowSide';
import KitchenIndexSide from './KitchenIndexSide';


class Sidebar extends React.Component {

  findKitchen(id){
    return this.props.kitchens.find(k => k.id === id);
  }

  showDetails(id){
    let k = this.findKitchen(id)
    return <KitchenShowSide kitchen={k}/>
  }

  renderSidebar = () => {
    let kitchens = this.props.kitchens;
    switch (this.props.renderPair) {
      case 'kitchenIndex':
        return <KitchenIndexSide kitchens={kitchens} showDetails={this.showDetails}/>
      // case 'kitchenShow':
      //   return <KitchenDetailSideCard />;
      default:
        return <KitchenIndexSide kitchens={kitchens} showDetails={this.showDetails}/>
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
