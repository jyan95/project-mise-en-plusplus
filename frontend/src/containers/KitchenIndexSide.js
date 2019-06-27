import React from "react";
import KitchenSideCard from "../components/KitchenSideCard";
import './Sidebar.css'
import { Button, Popup, Input } from 'semantic-ui-react'

class KitchenIndexSide extends React.Component {

  state ={
    newKitchen: ''
  }

  handleChange = (e) => {
    this.setState({newKitchen: e.target.value}, ()=>console.log(this.state.newKitchen))
  }

  render(){
    return (
      <div className="raised ui-items">
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
          content={
            <form onSubmit={(event)=>this.props.handleNewKitchen(event, this.state.newKitchen)}>
                <Input icon='add' placeholder='Add Kitchen...' onChange={this.handleChange}/>
            </form>
          }
          on='click'
          hideOnScroll
        />
      </div>
    )
  }
}

export default KitchenIndexSide;
