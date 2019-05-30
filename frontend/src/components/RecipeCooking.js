import React from 'react';
import { Container, Header, Card } from 'semantic-ui-react';
import Timer from 'react-compound-timer'

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
          <div>

            {i.progress === 1 &&
              <Card className="centered" onClick={() => {this.nextProgress(i.id); this.props.update()}} key={i.id} >
                <h5>{i.action + ` the ` + ingredients[index].ingredient}</h5>
                {`est: ` + i.duration + ` minutes`}
              </Card>
            }

            {i.progress === 2 &&
              <Timer>
                {({ start, resume, pause, stop, reset, timerState }) => (
                <Card className="centered" onClick={() => {this.nextProgress(i.id); this.props.update()}} key={i.id} >
                  <h5>{i.action + ` the ` + ingredients[index].ingredient}</h5>
                    <p><Timer.Minutes />:<Timer.Seconds formatValue={(value) => (value < 10 ? `0${value}` : value)}/>  </p>
                </Card>
                )}
              </Timer>
            }

            {i.progress === 3 &&
                <Card className="centered" onClick={() => {this.nextProgress(i.id); this.props.update()}} key={i.id} >
                  <h5>{i.action + ` the ` + ingredients[index].ingredient}</h5>
                    <p> Completed! </p>
                </Card>
            }

          </div>

        ))}
      </Container>
    )
  }
}

export default RecipeCooking;
