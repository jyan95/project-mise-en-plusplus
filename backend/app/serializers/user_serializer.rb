class UserSerializer < ActiveModel::Serializer
  has_many :kitchens
  has_many :dishes, through: :kitchens
  has_many :recipes, through: :dishes
  attributes :id, :username
end
