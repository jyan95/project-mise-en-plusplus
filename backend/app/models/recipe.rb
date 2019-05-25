class Recipe < ApplicationRecord
  has_many :dishes
  has_many :instructions
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients
end
