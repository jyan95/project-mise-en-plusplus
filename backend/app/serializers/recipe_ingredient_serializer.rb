class RecipeIngredientSerializer < ActiveModel::Serializer
  # belongs_to :recipe
  # belongs_to :ingredient
  attributes :id, :quantity
end
