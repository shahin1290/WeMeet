class Groups::ShortShowSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :future_events, serializer: Events::ForGroupCollectionSerializer
  has_many :past_events, serializer: Events::ForGroupCollectionSerializer
end