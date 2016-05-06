class Api::BeastsController < ApplicationController

  def new
    @beast = Beast.new()
    render :new
  end

  def create
    @beast = Beast.new(
      author_id: params[:author_id],
      name: params[:name],
      description: params[:description],
      avg_height: params[:avg_height],
      avg_weight: params[:avg_weight],
      avg_length: params[:avg_length],
      affinity_id: params[:affinity_id]
    )

    if @beast.save
      render :show
    else
      @errors = @beast.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def show
    @beast = Beast.find(params[:id])
    render :show
  end

  def index
    if(params[:data][:affinity_id].to_i == 0)
      @beasts = Beast.all
    else
      @beasts = Beast.where("affinity_id = ?", params[:data][:affinity_id].to_i)
    end
    @averages = @beasts.joins(:reviews).group("beasts.id").average("reviews.rating")
    # @averages = Beast.find_by_sql("SELECT BEAST_ID, ROUND(AVG(RATING), 2) FROM REVIEWS JOIN BEASTS ON BEASTS.id =  REVIEWS.BEAST_ID GROUP BY REVIEWS.BEAST_ID")
    render :index
  end
end
