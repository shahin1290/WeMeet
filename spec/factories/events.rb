FactoryBot.define do
  factory :event do
    title { "EventName" }
    date { "2019-12-12" }
    description { "Description for event" }
    location { "Location for event" }
    group
  end
end
