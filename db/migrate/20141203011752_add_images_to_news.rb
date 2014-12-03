class AddImagesToNews < ActiveRecord::Migration
  def change
    add_column :news, :image_embed, :string
  end
end
