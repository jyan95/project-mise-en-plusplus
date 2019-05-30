class UsersController < ApplicationController
  def index
    @all = User.all
    render json: @all
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    # byebug
    @user = User.find_or_create_by(username: params["username"])
    render json: @user
  end
end
