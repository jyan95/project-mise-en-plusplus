import React from 'react';

class Ingredient extends React.Component {
  state={
    stage:1
  }

  nextStage = () => {
    this.setStage(prevState => {
      stage: prevState.stage+=1
    })
  }

  render(){
    const { ingredient, quantity } = this.props.ingredient;
    return(
      <Card
        className='centered'
        onClick={this.nextStage}
        header={ingredient}
        description={quantity}
      />
    )
  }
}

export default Ingredient;
