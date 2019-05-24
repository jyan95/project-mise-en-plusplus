class User < ApplicationRecord
  has_many :kitchens
  has_many :dishes, through: :kitchens
  has_many :recipes, through: :dishes
end
