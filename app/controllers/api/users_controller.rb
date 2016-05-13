class Api::UsersController < ApplicationController
  def new
    @user = User.new()
    render :new
  end

  def create
    @user = User.new(user_params)
    if(@user.save)
      sign_in(@user)
      render :show #We are sending back JSON data from this view as a response to the API request
    else
      @errors = @user.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def show
    @user = current_user
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
