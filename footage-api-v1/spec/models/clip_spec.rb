require 'rails_helper'

RSpec.describe Clip, :type => :model do
  context "when instantiated without any params" do
    it "will create a valid record" do
      video = Video.create
      clip = Clip.create(video: video)
      expect( clip ).to be_valid
    end
  end
end
