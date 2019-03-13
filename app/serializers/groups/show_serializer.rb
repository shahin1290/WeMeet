class Groups::ShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location
  attribute :members
  attribute :organizer
  has_many :future_events, serializer: Events::ForGroupCollectionSerializer
  has_many :past_events, serializer: Events::ForGroupCollectionSerializer

  def members
    object.members.each.map do |member|
    Users::ShowSerializer.new(member.user)
    end
  end

  def organizer
    Users::ShowSerializer.new(object.organizer)
  end

end


