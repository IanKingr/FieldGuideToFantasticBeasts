Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resource :likes, only: [:create, :destroy]
    resources :beasts, only: [:create, :destroy, :show, :index]
    resources :reviews, only: [:create, :show, :index]
  end

  root "static_pages#root"
  get "/beasts/:id", to: "static_pages#root"
  get "/beasts/:affinity_id/:id", to: "static_pages#root"
  get "/user", to: "static_pages#root"
end
