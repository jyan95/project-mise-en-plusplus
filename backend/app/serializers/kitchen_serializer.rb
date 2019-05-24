class KitchenSerializer < ActiveModel::Serializer
  belongs_to :user
  has_many :dishes
  attributes :id, :name, :user, :recipes
end
