class Kitchen < ApplicationRecord
  belongs_to :user
  has_many :dishes
  has_many :recipes, through: :dishes
end
