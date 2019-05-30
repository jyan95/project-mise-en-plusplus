import React from "react";
import KitchenSideCard from "../components/KitchenSideCard";
import './Sidebar.css'
import { Button, Popup, Input, Form} from 'semantic-ui-react'

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
        <Popup
          trigger={<Button>Add Kitchen</Button>}
          content={<Form><Input icon='add' placeholder='Add Kitchen...' onSubmit={this.props.handleNewKitchen}/></Form>}
          on='click'
          hideOnScroll
        />
      </div>
    )
  }
}

export default KitchenIndexSide;
