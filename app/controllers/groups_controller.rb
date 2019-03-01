class GroupsController < ApplicationController
  # before_action :authenticate_user!, only: [:create]

  def index
    groups = Group.all
    render json: groups
  end

  def show
    group = Group.find(params[:id])
    render json: group
  end

  def create
    group = Group.new(group_params) 
    if group.save
      render json: { message: 'You have created a group successfully' }
    else
      render json: { error: group.errors.full_messages }, status: 400
    end
  end

  private
  def group_params
    params.require(:group).permit(:name, :category_id)
  end

end



