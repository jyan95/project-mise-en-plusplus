import React from "react";
import KitchenDetailSideCard from "../components/KitchenDetailSideCard";
import { Button } from 'semantic-ui-react';

class KitchenShowSide extends React.Component {


  render(){
    const { name, recipes } = this.props.currentKitchenShow;
    return(
      <div className="centered">
        <h1> { name }-Kitchen </h1>
        <h2> <Button onClick={this.props.handleCookClick}>Start Cooking!</Button> </h2>
        <div className='content'>
          <div className='left aligned description'>
            {recipes.map(recipe => {
              return <KitchenDetailSideCard
                key={recipe.id}
                recipe={recipe}
                handleDeleteClick={this.props.handleDeleteClick}
              />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default KitchenShowSide;
