class KitchensController < ApplicationController
  def index
    @all = Kitchen.all
    render json: @all
  end

  def show
    @kitchen = Kitchen.find(params[:id])
    render json: @kitchen
  end

  def create
    @kitchen = Kitchen.find_or_create_by(user_id: params['user_id'], name: params['name'])
    render json: @kitchen
  end
end
