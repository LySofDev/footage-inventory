class VideosController < ApplicationController

  def index
    render json: {
      data: {
        videos: Video.take( 10 )
      }
    }
  end

end
