class Events::IndexSerializer < ActiveModel::Serializer
  attributes :id, :title, :time, :description, :location, :date
  belongs_to :group

  def time
    object.time.to_formatted_s(:time)
  end
end
