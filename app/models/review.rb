class Review < ActiveRecord::Base
  validates :user_id, presence: {
    in: true,
    message: "must be logged in!"
  }
  validates :beast_id, :rating, :description, presence: true
  validates :user_id, uniqueness: {
    scope: :beast_id
  }
  validates :rating, exclusion: {
    in: [0],
    message: "is required"
  }

  belongs_to :user
  belongs_to :beast
end
