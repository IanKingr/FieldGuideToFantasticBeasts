class User < ActiveRecord::Base
  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_secure_password

# Replaced by User.find_by(username: ).try(:authenticate, 'password')
  # def self.find_by_credentials username, password
	# 	user = User.find_by(username: username)
	# 	return nil unless user
	# 	user.password_is?(password) ? user : nil
	# end

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
