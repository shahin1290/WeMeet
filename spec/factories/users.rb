FactoryBot.define do
  factory :user do
    name {'myString'}
    email { Faker::Internet.email }
    password { 'password' }
  end
end
