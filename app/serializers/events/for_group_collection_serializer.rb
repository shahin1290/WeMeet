class Events::ForGroupCollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :time, :description, :location
  def time
    object.time.to_formatted_s(:time)
  end

end
