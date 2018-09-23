class ClipsController < ApplicationController

  def index
    render json: {
      data: {
        clips: clips_in_current_video
      }
    }
  end

  private

  def current_video
    Video.find( params[:video_id] )
  end

  def clips_in_current_video
    current_video.clips
  end

end
