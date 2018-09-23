class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :identifier
      t.string :path
      t.float :duration
      t.float :size

      t.timestamps
    end
  end
end
