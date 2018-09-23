Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'videos', to: 'videos#index'
  get 'videos/:video_id/clips', to: 'clips#index'
end
