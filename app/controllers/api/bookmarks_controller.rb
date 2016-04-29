class Api::BookmarksController < ApplicationController

  def new
    @bookmark = Bookmark.new()
    render :new
  end

  def create
    @bookmark = Bookmark.new(
      user_id: params[:user_id],
      beast_id: params[:beast_id]
    )

    if @bookmark.save
      render :show
    else
      @errors = @bookmark.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def show
    @bookmark = Bookmark.find(params[:id])
    render :show
  end

  def destroy
    @message = "Successfully Deleted Bookmark"
    render json: @message
  end

end
