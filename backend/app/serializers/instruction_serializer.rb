class InstructionSerializer < ActiveModel::Serializer
  # belongs_to :recipe
  attributes :id, :recipe_id, :stage, :action, :duration

end
