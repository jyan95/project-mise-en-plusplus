class RecipeSerializer < ActiveModel::Serializer
  has_many :dishes
  attributes :id, :name, :ingredients, :instructions
end
