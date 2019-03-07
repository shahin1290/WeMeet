class Events::ShowSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :title, :date, :description, :location
  attribute :attendees
  belongs_to :group, serializer: Groups::ShowSerializer

  def attendees
    object.attendees.each.map do |attendee|
      Users::ShowSerializer.new(attendee.user)
    end
  end

end
