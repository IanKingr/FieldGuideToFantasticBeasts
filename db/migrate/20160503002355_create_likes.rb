class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :beast_id, null: false

      t.timestamps null: false
    end

    add_index :likes, :user_id
    add_index :likes, :beast_id
    add_index :likes, [:user_id, :beast_id], unique: true
  end
end
