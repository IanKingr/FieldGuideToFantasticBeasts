json.extract! @review, :id, :user_id, :rating, :description, :created_at
json.reviews do
  json.array! @review.user do |user|
    json.username
  end
end
