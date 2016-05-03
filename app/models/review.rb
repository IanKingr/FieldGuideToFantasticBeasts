class Review < ActiveRecord::Base
  validate :user_id, :beast_id, :rating, :description, presence: true
  validates :user_id, uniqueness: { scope: :beast_id}

  belongs_to :user
  belongs_to :beast
end
