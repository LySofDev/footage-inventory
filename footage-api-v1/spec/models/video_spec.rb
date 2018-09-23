require 'rails_helper'

RSpec.describe Video, :type => :model do
  context "when instantiated without any params" do
    it "will create a valid record" do
      video = Video.create
      expect( video ).to be_valid
    end
  end
end
