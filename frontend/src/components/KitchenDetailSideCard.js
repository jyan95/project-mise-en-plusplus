import React from 'react';
import { Icon } from 'semantic-ui-react'

class KitchenDetailSideCard extends React.Component {

  state = {
    show: false
  }

  handleShowClick = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render(){
    const { name, ingredients } = this.props.recipe;
    return (

      <div className="ui card centered ">
        <h2>
          { name }
          {this.state.show
            ?<Icon name="chevron down" onClick={this.handleShowClick}/>
            :<Icon name="chevron left" onClick={this.handleShowClick}/>
          }
          <Icon name="remove circle" onClick={()=>this.props.handleDeleteClick(this.props.recipe.id)}/>
        </h2>
        {this.state.show &&
          ingredients.map(ingredient => {
          return <li>{ingredient.ingredient}</li>
        })}
      </div>
    )
  }
}

export default KitchenDetailSideCard;
