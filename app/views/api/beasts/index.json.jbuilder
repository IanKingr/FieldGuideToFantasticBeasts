# json.array! @beasts, :id, :name, :affinity_id, :description, :avg_height, :avg_weight, :avg_length


@beasts.each do |beast|
  json.set! beast.id do
    json.extract! beast, :id, :name, :affinity_id, :description, :avg_height, :avg_weight, :avg_length, :image_url

    json.like_users beast.like_users.pluck(:id)
  end
end
