class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(
      user_id: params[:user_id],
      beast_id: params[:beast_id],
      description: params[:description],
      rating: params[:rating],
    )

    if @review.save
      render :show
    else
      @errors = @review.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def index
    @reviews = Review.where("beast_id = ?", params[:data][:beast_id].to_i)
    render :index
  end

end
