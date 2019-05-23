class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :kitchens
end
