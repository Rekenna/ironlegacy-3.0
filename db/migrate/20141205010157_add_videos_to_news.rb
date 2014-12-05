class AddVideosToNews < ActiveRecord::Migration
  def change
    add_column :news, :youtube_embed, :string
  end
end
