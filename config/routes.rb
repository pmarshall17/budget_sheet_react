Rails.application.routes.draw do

  root 'home#index'

  namespace :api do
  	resources :boards
  end

  get '*unmatched_route', to: 'home#index'
end
