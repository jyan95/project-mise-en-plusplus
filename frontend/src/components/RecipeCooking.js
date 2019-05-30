import React from 'react';
import { Container, Header, Card } from 'semantic-ui-react';

class RecipeCooking extends React.Component{

  state = {
    instructions: this.props.recipe.instructions
  }

  nextProgress(id){
    this.setState({
      instructions: this.state.instructions.map(i => i.id === id ? {...i,progress: i.progress===3 ? i.progress=3 : i.progress+=1} : i)
    })
  }
  render(){
    const { name, ingredients } = this.props.recipe;
    let instructions = this.state.instructions.filter(i => i.progress === this.props.progress);
    return(
      <Container>
        <Header as='h3'>{name}</Header>
        {instructions.map((i, index) => (
          <Card
            className="centered"
            onClick={() => {
              this.nextProgress(i.id);
              this.props.update()
            }}
            key={i.id}
          >
            <h5>{i.action + ` the ` + ingredients[index].ingredient}</h5>
            {`est: ` + i.duration + ` minutes`}

          </Card>
        
        ))}
      </Container>
    )
  }
}

export default RecipeCooking;
