json.extract! @review, :id, :user_id, :rating, :description, :created_at
json.username do
    json.username @review.user.username
end
