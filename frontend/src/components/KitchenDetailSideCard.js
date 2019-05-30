import React from 'react';
import { Icon, Grid } from 'semantic-ui-react'

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
    const { name, ingredients, instructions } = this.props.recipe;
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
        <Grid>
          <Grid.Column width={8}>
            {this.state.show && <h4>Ingredients:</h4>}
            {this.state.show &&
              ingredients.map(ingredient => {
              return <li>{ingredient.ingredient}</li>
            })}
          </Grid.Column>
          <Grid.Column width={8}>
            {this.state.show && <h4>Instruction:</h4>}
            {this.state.show &&
              instructions.map(instruction => {
              return <li>{instruction.action}</li>
            })}
          </Grid.Column>
        </Grid>

      </div>
    )
  }
}

export default KitchenDetailSideCard;
