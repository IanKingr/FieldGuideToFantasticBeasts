json.array! @reviews do |review|
  json.id review.id
  json.user_id review.user_id
  json.rating review.rating
  json.description review.description
  json.created_at review.created_at
  json.username review.user.username
end
