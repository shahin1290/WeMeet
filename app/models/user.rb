class User < ApplicationRecord
  validates_presence_of :name
  # Fix based on https://github.com/lynndylanhurley/devise_token_auth/issues/1079#issuecomment-363155625
  def tokens_has_json_column_type?
    false
  end
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  include DeviseTokenAuth::Concerns::User
  
  has_many :rsvps
  has_many :memberships
  has_many :groups, through: :memberships
end
