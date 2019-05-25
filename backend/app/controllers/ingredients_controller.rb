class IngredientsController < ApplicationController
  def index
    @all = Ingredient.all
    render json: @all
  end

  def show
    @ingredient = Ingredient.find(params[:id])
    render json: @ingredient
  end
end
