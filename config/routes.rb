# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks]
  
  resources :events, only: [:index, :show] do
    resources :attendees, only: [:create]
  end

  resources :categories, only: [:index, :show] 

  resources :groups, only: [:index, :show, :create] do
    resources :memberships, only: [:index, :create]
    resources :events, only: [:index, :create]
  end
  
  resources :users, only: [:show]
end
