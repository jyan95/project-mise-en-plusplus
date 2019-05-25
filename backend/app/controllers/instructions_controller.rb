class InstructionsController < ApplicationController
  def index
    @all = Instruction.all
    render json: @all
  end

  def show
    @instruction = Instruction.find(params[:id])
    render json: @instruction
  end
end
