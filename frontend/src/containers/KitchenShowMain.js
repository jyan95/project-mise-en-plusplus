import React from "react";
import RecipeMainCard from "../components/RecipeMainCard";


class KitchenShowMain extends React.Component {

  render(){
    return (
      <div>
        <h1> Add Recipes: </h1>
        <div className="ui three stackable cards">
          {this.props.recipes.map(recipe => <RecipeMainCard recipe={recipe} handleAddClick={this.props.handleAddClick} key={recipe.id}/>)}
        </div>
      </div>
    )
  }
}

export default KitchenShowMain;
