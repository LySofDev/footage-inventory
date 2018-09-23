class VideosController < ApplicationController

  def index
    render json: {
      data: {
        videos: first_10_videos
      }
    }
  end

  private

  def first_10_videos
    Video.take( 10 )
  end

end
