class RecipeSerializer < ActiveModel::Serializer
  # has_many :dishes
  # has_many :instructions
  # has_many :recipe_ingredients
  # has_many :ingredients, through: :recipe_ingredients
  attributes :id, :name, :ingredients

  def ingredients
    self.object.recipe_ingredients.map do |ri|
      {
        id: ri.id,
        ingredient: ri.ingredient.name,
        quantity: ri.quantity
      }
    end
  end

end
