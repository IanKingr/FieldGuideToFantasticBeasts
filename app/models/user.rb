class User < ActiveRecord::Base
  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness
  has_secure_password

  validates :username, presence: true
  validates :password, length: { minimum: 8 }, allow_nil: true

  has_many :beasts,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "Beast"

  has_many :reviews
  has_many :bookmarks

  def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end


  private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end
end
