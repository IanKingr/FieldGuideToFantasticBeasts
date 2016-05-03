class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :beast_id, null: false
      t.integer :rating, null: false
      t.text :description, null: false

      t.timestamps null: false
    end

    add_index :reviews, :beast_id
    add_index :reviews, :user_id
    add_index :reviews, [:user_id, :beast_id], unique: true
  end
end
