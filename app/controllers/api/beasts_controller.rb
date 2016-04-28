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
    @beasts = Beast.find_by(affinity_id: params[:affinity_id])
    render :index
  end
end
