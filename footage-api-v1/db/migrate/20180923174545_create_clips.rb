class CreateClips < ActiveRecord::Migration[5.2]
  def change
    create_table :clips do |t|
      t.string :identifier
      t.float :startTime
      t.float :endTime
      t.references :video, foreign_key: true

      t.timestamps
    end
  end
end
