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
    @user = User.find_or_create_by(params['username'])
    render json: @user
  end
end
