require 'faker'
include Faker

User.create(username:'josh')
User.create(username:'john')

250.times do
  Ingredient.create(name: Faker::Food.unique.ingredient)
end

50.times do
  Recipe.create(name: Faker::Food.unique.dish)
end

500.times do
  RecipeIngredient.create(recipe_id: rand(1..50), ingredient_id: rand(1..250), quantity: Faker::Food.measurement)
end

30.times do
  Dish.create(kitchen_id: rand(1..10), recipe_id: rand(1..50))
end

200.times do
  Instruction.create(recipe_id: rand(1..50), stage: rand(1..3), action: Faker::Verb.base, duration: rand(60..300))
end

10.times do
  Kitchen.create(name: Faker::Address.unique.country, user_id: rand(1..2))
end
