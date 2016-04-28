class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(
    username: params[:username]).try(:authenticate, params[:password])
    if(@user)
      sign_in(@user)
      render :show
    else
      @errors = ['invalid credentials']
      render "api/shared/error", status: 401
    end
  end

  def destroy
		@user = current_user
		if @user
			sign_out
			render :show
		else
			@errors = ['no one logged in']
			render "api/shared/error", status: 404
		end
	end

  def show
    token = session[:session_token]
    @user = User.find_by({session_token: token})
		if @user
			render :show
		else
			@errors = nil
			render "api/shared/error", status: 404
		end
	end
  #
  # private
  # def session_params
  #   params.require(:session).permit(:username, :password)
  # end
end
