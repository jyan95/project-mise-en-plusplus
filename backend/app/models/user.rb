class User < ApplicationRecord
  has_many :kitchens
  has_many :recipes, through: :kitchens
end
