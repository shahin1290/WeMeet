class Events::ForGroupCollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :description, :location
end
