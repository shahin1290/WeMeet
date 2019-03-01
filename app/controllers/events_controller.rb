class EventsController < ApplicationController
  def index
    if params[:group_id]
      events = Event.where(group_id: params[:group_id])
    else
      events = Event.all
    end
    render json: events
  end

  def create
    group = Group.find(params[:group_id])
    event = group.events.create(event_params)
    if event.persisted?

      render json: { message: 'You have successfully created an event' }
    else
      render json: { error: event.errors.full_messages }
    end
  end

  private
  def event_params
    params.require(:event).permit(:title, :description, :location)
  end
end
