json.extract! @beast, :author_id, :name, :description, :avg_height, :avg_weight, :avg_length, :affinity_id, :id, :image_url

json.like_users @beast.like_users.map { |user| user.id }

# json.reviews do
#   json.array! @beast.reviews do |review|
#     json.id review.id
#     json.user_id review.user_id
#     json.beast_id review.beast_id
#     json.rating review.rating
#     json.description review.description
#     json.created_at review.created_at
#   end
# end
