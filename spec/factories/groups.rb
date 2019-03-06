FactoryBot.define do
  factory :group do
    name { "GroupName" }
    description { "GroupDescription" }
    location { "GroupLocation" }
    category
    association :organizer, factory: :user
  end
end
