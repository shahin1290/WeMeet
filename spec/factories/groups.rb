FactoryBot.define do
  factory :group do
    name { "GroupName" }
    category
    association :organizer, factory: :user
  end
end
