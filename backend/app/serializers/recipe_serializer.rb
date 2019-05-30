class RecipeSerializer < ActiveModel::Serializer
  # has_many :dishes
  # has_many :instructions
  # has_many :recipe_ingredients
  # has_many :ingredients, through: :recipe_ingredients
  # has_many :instructions
  attributes :id, :name, :ingredients, :instructions

  def ingredients
    self.object.recipe_ingredients.map do |ri|
      {
        id: ri.id,
        # dish_id: dishes.id,
        ingredient: ri.ingredient.name,
        quantity: ri.quantity
      }
    end
  end


end
