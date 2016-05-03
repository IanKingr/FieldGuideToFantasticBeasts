Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :beasts, only: [:create, :destroy, :show, :index]
    resources :reviews, only: [:create, :show, :index]
    resources :bookmarks, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
  get "/beasts/:id", to: "static_pages#root"
  get "/beasts/:affinity_id/:id", to: "static_pages#root"
end
