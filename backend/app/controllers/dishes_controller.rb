class DishesController < ApplicationController
  def index
    @all = Dish.all
    render json: @all
  end

  def show
    @dish = Dish.find(params[:id])
    render json: @dish
  end

  def create
    @dish = Dish.find_or_create_by(kitchen_id: params['kitchen_id'], recipe_id: params['recipe_id'])
    render json: @dish
  end

  def destroy
    @dish = Dish.find(params[:id])
    @dish.destroy
    render json: @dish
  end
end
