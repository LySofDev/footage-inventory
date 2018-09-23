FactoryBot.find_definitions

25.times do
  video = FactoryBot.create( :video )
  ( rand( 4 ) + 1 ).times do
    FactoryBot.create( :clip, video: video )
  end
end
