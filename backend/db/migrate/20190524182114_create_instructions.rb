class CreateInstructions < ActiveRecord::Migration[5.2]
  def change
    create_table :instructions do |t|
      t.integer :recipe_id
      t.integer :stage
      t.string :action
      t.integer :duration

      t.timestamps
    end
  end
end
