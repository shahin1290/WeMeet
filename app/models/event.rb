class Event < ApplicationRecord
  validates_presence_of :title, :description, :location, :time, :date
  has_many :attendees, class_name: 'Rsvp'
  belongs_to :group

  scope :future_events, -> { where("date >= ?", Time.zone.today) }
  scope :past_events, -> { where("date <= ?", 1.day.ago) }

end