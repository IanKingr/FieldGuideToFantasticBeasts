

class Api::UsersController < ApplicationController
  def new
    @user = User.new()
    render :new
  end

  def create
    @user = User.new(
      username: params[:username],
      password: params[:password])
    # debugger;
    if(@user.save)
      sign_in(@user)
      render :show #We are sending back JSON data from this view as a response to the API request
    else
      flash.now[:errors] = @user.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def show
    # @user = User.find(params[:id])
    @user = current_user
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
