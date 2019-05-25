class RecipeIngredientsController < ApplicationController
  def index
    @all = RecipeIngredients.all
    render json: @all
  end

  def show
    @recipe_ingredients = RecipeIngredients.find(params[:id])
    render json: @recipe_ingredients
  end
end
