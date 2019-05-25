class RecipesController < ApplicationController
  def index
    @all = Recipe.all
    render json: @all
  end

  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipe
  end
end
