class KitchenSerializer < ActiveModel::Serializer
  # belongs_to :user
  # has_many :dishes
  has_many :recipes, through: :dishes
  attributes :id, :name, :dishes

  def dishes
    self.object.dishes.map do |d|
      {
        id: d.id,
        recipe_id: d.recipe.id,
        kitchen_id: d.kitchen.id
      }
    end
  end
end
