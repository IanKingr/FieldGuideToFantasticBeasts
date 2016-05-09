json.set! :beasts do
  @beasts.each do |beast|
    json.set! beast.id do
      json.extract! beast, :id, :name, :affinity_id, :description, :avg_height, :avg_weight, :avg_length, :image_url
      if @averages[beast.id]
        json.average @averages[beast.id].round(1)
      else
        json.average @averages[beast.id]
      end
      json.like_users beast.like_users.pluck(:id)
    end
  end
end

json.queryDetails do
  json.queryAverage @query_average.round(1)
  json.totalBeasts @total_beasts
  json.bestBeast @best_beast
end
