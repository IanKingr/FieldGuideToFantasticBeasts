json.extract! @user, :username, :id

json.liked_beasts @user.liked_beasts.map { |beast| beast.id }
