class DropImagesTable < ActiveRecord::Migration
  def change
    drop_table :images
    add_column :beasts, :image_url, :string
  end
end
