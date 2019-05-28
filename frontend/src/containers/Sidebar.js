import React from "react";
import KitchenShowSide from './KitchenShowSide';
import KitchenIndexSide from './KitchenIndexSide';


class Sidebar extends React.Component {

  findKitchen(id){
    return this.props.kitchens.find(k => k.id === id);
  }

  renderSidebar = () => {
    let kitchens = this.props.kitchens;
    switch (this.state.renderPair) {
      case 'kitchenIndex':
        return kitchens.map(k => <KitchenSideCard kitchen={k}/>);
      case 'kitchenShow':
        return <KitchenDetailSideCard />;
      default:
        return kitchens.map(k => <KitchenSideCard kitchen={k}/>);
    }
  }

  render(){
    return(
      <div className='ui items'>
        {this.renderSidebar}
      </div>
    )
  }
}

export default Sidebar;
