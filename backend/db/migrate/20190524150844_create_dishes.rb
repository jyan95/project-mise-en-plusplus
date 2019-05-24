class CreateDishes < ActiveRecord::Migration[5.2]
  def change
    create_table :dishes do |t|
      t.integer :kitchen_id
      t.integer :recipe_id

      t.timestamps
    end
  end
end
