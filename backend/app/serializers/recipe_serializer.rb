class RecipeSerializer < ActiveModel::Serializer
  # has_many :dishes
  # has_many :instructions
  # has_many :recipe_ingredients
  # has_many :ingredients, through: :recipe_ingredients
  attributes :id, :name, :ingredients
end
