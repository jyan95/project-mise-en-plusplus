Rails.application.routes.draw do
  resources :instructions, only: [:index, :show]
  resources :ingredients, only: [:index, :show]
  resources :recipe_ingredients, only: [:index, :show]
  resources :dishes
  resources :recipes, only: [:index, :show]
  resources :kitchens
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
