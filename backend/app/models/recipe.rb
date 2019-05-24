class Recipe < ApplicationRecord
  has_many :dishes
  has_many :instructions
end
