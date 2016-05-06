class DropImagesTable < ActiveRecord::Migration
  def change
    drop_table :images
    add_column :beasts, :image_url, :string, { default: "http://res.cloudinary.com/flyingonclouds/image/upload/v1462475866/orc_warrior_blackandwhite_p8rox8.png"}
  end
end
