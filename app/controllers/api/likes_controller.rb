class Api::LikesController < ApplicationController

  def create
    @like = Like.new(
      user_id: current_user.id,
      beast_id: like_params[:beast_id].to_i,
    )

    if @like.save
      render json: {
        userId: current_user.id,
        beastId: like_params[:beast_id].to_i
      }, status: 200
    else
      @errors = @like.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def destroy
    like = Like.find_by(
      user_id: current_user.id,
      beast_id: like_params[:beast_id].to_i
    )

    if(like.destroy)
      render json: {
        userId: current_user.id,
        beastId: like_params[:beast_id].to_i
      }, status: 200
    else
      @errors = like.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  private
  def like_params
    params.require(:like).permit(:beast_id)
  end

end
