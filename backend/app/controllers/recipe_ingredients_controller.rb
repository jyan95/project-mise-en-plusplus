class RecipeIngredientsController < ApplicationController
  def index
    @all = RecipeIngredient.all
    render json: @all
  end

  def show
    @recipe_ingredients = RecipeIngredient.find(params[:id])
    render json: @recipe_ingredients
  end
end
