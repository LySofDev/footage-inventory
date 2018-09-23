require 'rails_helper'

RSpec.describe VideosController, type: :controller do

  describe "GET /videos" do

    context "Without any params" do

      before :each do
        get :index
      end

      it "returns a 200 response" do
        expect( response.status ).to eq 200
      end

      it "returns 10 video records" do
        json = JSON.parse( response.body )
        expect( json["data"]["videos"].size ).to eq 10
      end

    end

  end

end
