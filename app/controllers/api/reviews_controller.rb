class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      @errors = @review.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def show
    @review = Review.find(review_params[:id])
    render :show
  end

  def index
    @reviews = Review.where("beast_id = ?", review_params[:beast_id].to_i)
    render :index
  end

  private
  def review_params
    params.require(:review).permit(:id, :user_id, :beast_id, :description, :rating)
  end
end
