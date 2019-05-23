class CreateKitchens < ActiveRecord::Migration[5.2]
  def change
    create_table :kitchens do |t|
      t.string :name
      t.integer :user_id

      t.timestamps
    end
  end
end
