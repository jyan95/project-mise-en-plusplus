class KitchenSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id

  has_many :recipes
end
