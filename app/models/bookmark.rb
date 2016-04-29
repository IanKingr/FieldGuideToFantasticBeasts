class Bookmark < ActiveRecord::Base
  validates :user_id, :beast_id, presence: true

  belongs_to :user

  belongs_to :beast
end
