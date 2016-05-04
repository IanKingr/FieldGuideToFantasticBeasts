json.array! @reviews, :id, :user_id, :rating, :description, :created_at

json.array! @reviews do |review|
  json.username review.user.username
end
