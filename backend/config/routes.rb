Rails.application.routes.draw do
  resources :instructions
  resources :ingredients
  resources :recipe_ingredients
  resources :dishes
  resources :recipes
  resources :kitchens
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
