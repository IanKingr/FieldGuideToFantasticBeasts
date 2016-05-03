class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :review_id, null: false

      t.timestamps null: false
    end

    add_index :likes, :user_id
    add_index :likes, :review_id
    add_index :likes, [:user_id, :review_id], unique: true
  end
end
