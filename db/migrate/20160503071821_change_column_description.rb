class ChangeColumnDescription < ActiveRecord::Migration
  def up
    change_column :beasts, :description, :text
  end

  def down
    change_column :beasts, :description, :string
  end
end
