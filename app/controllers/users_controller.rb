class UsersController < ApplicationController
  include DeviseTokenAuth::Concerns::SetUserByToken

  def show
    user = User.find(params[:id])
    if user == current_user
      render json: current_user, serializer: Users::MeSerializer
    else
      render json: current_user, serializer: Users::ShowSerializer
    end
  end
end