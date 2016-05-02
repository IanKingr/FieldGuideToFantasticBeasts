class Api::ImagesController < ApplicationController
  def index
    debugger
    @images = Image.all
    render :index
  end

  def create
        debugger
    @image = Image.new(image_params)
    if @image.save
      render :show
    else
    end
  end

  private

  def image_params
        debugger
    params.require(:image).permit(:url)
  end

end
