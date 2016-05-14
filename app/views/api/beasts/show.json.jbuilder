# json.extract! @beast, :author_id, :name, :description, :avg_height, :avg_weight, :avg_length, :affinity_id, :id, :image_url

json.beast do
  json.author_id @beast.author_id
  json.name @beast.name
  json.description @beast.description
  json.avg_height @beast.avg_height
  json.avg_weight @beast.avg_weight
  json.avg_length @beast.avg_length
  json.affinity_id @beast.affinity_id
  json.id @beast.id
  json.image_url @beast.image_url
  json.like_users @beast.like_users.map { |user| user.id }
end

json.set! :beasts do
  @beasts.each do |beast|
    json.set! beast.id do
      json.extract! beast, :id, :name, :author_id, :affinity_id, :description, :avg_height, :avg_weight, :avg_length, :image_url
      json.like_users beast.like_users.pluck(:id)
    end
  end
end

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
