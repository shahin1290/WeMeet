class Groups::ShortShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location
  has_many :future_events, serializer: Events::ForGroupCollectionSerializer
  has_many :past_events, serializer: Events::ForGroupCollectionSerializer

  def description
    object&.description
  end

  def location
    object&.location
  end

end