class Categories::ShowSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :groups, serializer: Groups::ForCategoryShowSerializer
end