json.extract! @user, :username, :id

json.liked_beasts @user.liked_beasts.map { |beast| beast.id }

json.set! :reviews do
    json.array! @reviews do |review|
      json.extract! review, :rating, :description
      json.beast review.beast.name
    end
end
