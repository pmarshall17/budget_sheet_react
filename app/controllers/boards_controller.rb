class Api::BoardsController < ApplicationController

  def index
    @boards = Board.all
  end

  def show
  end

  def edit
  end

  def new
  end

  def delete
  end

  def update
  end

  def create
    @board = Board.create(board_params)
    if @board.save
      render json: @board
    else
      render json: {errors: @board.errors.full_messages }
    end
  end

  private
  def board_params
    params.require(:board.permit(:category, :sub_category, :money_value)
  end

end
