class MembershipsController < ApplicationController
  # before_action :authenticate_user!

  def index
    group = Group.find(params[:group_id])
    group_members = group.members.map{ |member| member.user }
    render json: group_members
  end

  def create
    group = Group.find(params[:group_id])
    group.members.create(user: current_user)
    render json: { message: 'You are now a member' }
  end

end
