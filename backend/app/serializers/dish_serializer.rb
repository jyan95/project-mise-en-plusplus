class DishSerializer < ActiveModel::Serializer
  belongs_to :kitchen
  belongs_to :recipe
  attributes :id, :kitchen, :recipe
end
