class CreateBeasts < ActiveRecord::Migration
  def change
    create_table :beasts do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :author_id, null: false
      t.integer :avg_height
      t.integer :avg_weight
      t.integer :avg_length
      t.integer :affinity_id, null: false

      t.timestamps null: false
    end

    add_index :beasts, [:author_id, :affinity_id]
    add_index :beasts, :name, unique: true
  end
end
