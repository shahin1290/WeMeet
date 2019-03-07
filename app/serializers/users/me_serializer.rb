class Users::MeSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :email

  has_many :organized_groups, serializer: Groups::ShowSerializer

end