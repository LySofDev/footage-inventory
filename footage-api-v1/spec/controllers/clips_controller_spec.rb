require 'rails_helper'

RSpec.describe ClipsController, type: :controller do

  describe "GET /clips" do

    context "With a video id param" do

      before :each do
        @video = Video.take( 1 ).first
        get :index, params: { video_id: @video.id }
      end

      it "returns a 200 response" do
        expect( response.status ).to eq 200
      end

      it "returns clip records" do
        json = JSON.parse( response.body )
        expect( json["data"]["clips"].size ).to eq @video.clips.size
      end

    end

  end

end
