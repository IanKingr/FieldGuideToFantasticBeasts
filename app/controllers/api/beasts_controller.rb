class Api::BeastsController < ApplicationController

  def new
    @beast = Beast.new()
    render :new
  end

  def create
    @beast = Beast.new(beast_params)
    @beasts = Beast.where("affinity_id = ?", beast_params[:affinity_id].to_i)
    if @beast.save
      render :show
    else
      @errors = @beast.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def show
    @beast = Beast.find(params[:id])
    @beasts = [];
    render :show
  end

  def index
    if(beast_params[:affinity_id].to_i == 0)
      @beasts = Beast.all
    else
      @beasts = Beast.where("affinity_id = ?", beast_params[:affinity_id].to_i)
    end
    # For refactor, I need to create an affinity model to house these calculations
    @total_beasts = @beasts.length
    @averages = @beasts.joins(:reviews).group("beasts.id").average("reviews.rating")
    sum = 0
    length = 0
    best_avg = nil
    @best_beast = nil
    @averages.keys.each do |key|
      if @averages[key]
        sum += @averages[key]
        if best_avg.nil? || @averages[key] > best_avg
          best_avg = @averages[key]
          @best_beast = @beasts.where(id:key)[0].name
        end
        length += 1
      end
    end
    @query_average = sum.to_f/length

    render :index
  end

  private
  def beast_params
    params.require(:beast).permit(:id, :author_id,:name,:description,:avg_height,:avg_weight,:avg_length,:affinity_id)
  end

end
