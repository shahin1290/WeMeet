FactoryBot.define do
  factory :event do
    title { "EventName" }
    date { "2019-12-12" }
    description { "Description for event" }
    location { "Location for event" }
    time { "12:12:12" }
    group
  end
end
