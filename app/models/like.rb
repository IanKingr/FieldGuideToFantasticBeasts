class Like < ActiveRecord::Base
  validates :user_id, uniqueness: { scope: :beast_id }

  belongs_to :user
  belongs_to :beast
end
