import React from 'react';
import { Container, Header, Card } from 'semantic-ui-react';

class RecipeCooking extends React.Component{
  constructor(props){
    super(props)
    this.state={
      instructions: this.props.recipe.instructions
    }
  }
  nextStage(id){
    this.setState({
      instructions: this.state.instructions.map(i => i.id === id ? {...i,stage: i.stage===3 ? i.stage=1 : i.stage+=1} : i)
    })
  }
  render(){
    const { id, name, ingredients } = this.props.recipe;
    let instructions = this.state.instructions.filter(i => i.stage === this.props.stage);
    return(
      <Container>
        <Header as='h3'>{name}</Header>
        {instructions.map((i, index) => (
          <Card
            className="centered"
            onClick={() => {
              this.nextStage(i.id);
              this.props.update()
            }}
            header={i.action + ` the ` + ingredients[index].ingredient}
          />
        ))}
      </Container>
    )
  }
}

export default RecipeCooking;
