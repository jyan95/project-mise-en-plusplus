class Kitchen < ApplicationRecord
  belongs_to :user
  has_many :dishes
end
