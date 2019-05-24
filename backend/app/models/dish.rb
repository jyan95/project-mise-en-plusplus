class Dish < ApplicationRecord
  belongs_to :kitchen
  belongs_to :recipe
end
