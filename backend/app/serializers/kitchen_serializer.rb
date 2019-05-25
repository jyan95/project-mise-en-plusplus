class KitchenSerializer < ActiveModel::Serializer
  # belongs_to :user
  # has_many :dishes
  # has_many :recipes, through: :dishes
  attributes :id, :name, :recipes
end
