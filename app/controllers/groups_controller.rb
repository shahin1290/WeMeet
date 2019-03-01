class GroupsController < ApplicationController
  before_action :authenticate_user!, only: [:create]

  def index
    groups = Group.all
    render json: groups, each_serializer: Groups::ShortShowSerializer
  end

  def show
    group = Group.find(params[:id])
    render json: group, serializer: Groups::ShowSerializer
  end

  def create
    group = Group.create(group_params)
    if group.persisted?
      render json: { message: 'Congratulations, your group has been created!' }
    else
      render json: { error: group.errors.full_messages }, status: 400
    end
  end

  private

  def group_params
    params.require(:group).permit(:name, :category_id, :description, :location)
  end
end



