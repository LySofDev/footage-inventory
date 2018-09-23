FactoryBot.define do
  factory :video do
    identifier { Faker::Lorem.sentence }
    path { Faker::File.file_name }
    duration { Faker::Number.decimal( 2 ) }
    size { Faker::Number.decimal( 2 ) }
  end
end
