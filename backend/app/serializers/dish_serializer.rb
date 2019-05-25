class DishSerializer < ActiveModel::Serializer
  # belongs_to :kitchen
  # belongs_to :recipe
  attributes :id, :kitchen_id, :recipe_id
end
