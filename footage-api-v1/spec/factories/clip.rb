FactoryBot.define do
  factory :clip do
    video { create(:video) }
    identifier { Faker::Lorem.sentence }
    startTime { Faker::Number.decimal( 2 ) }
    endTime { Faker::Number.decimal( 2 ) }
  end
end
