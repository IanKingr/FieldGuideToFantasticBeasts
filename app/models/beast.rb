class Beast < ActiveRecord::Base
  validates :author_id, :name, :description, :affinity_id, presence: true
  validates :name, uniqueness: true
  validates :affinity_id, exclusion: {
    in: [0],
    message: "is required"
  }

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "User"
end