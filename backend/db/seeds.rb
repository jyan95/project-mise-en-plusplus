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

70.times do
  RecipeIngredient.create(recipe_id: rand(1..10), ingredient_id: rand(1..250), quantity: Faker::Food.measurement)
  RecipeIngredient.create(recipe_id: rand(11..20), ingredient_id: rand(1..250), quantity: Faker::Food.measurement)
  RecipeIngredient.create(recipe_id: rand(21..30), ingredient_id: rand(1..250), quantity: Faker::Food.measurement)
  RecipeIngredient.create(recipe_id: rand(31..40), ingredient_id: rand(1..250), quantity: Faker::Food.measurement)
  RecipeIngredient.create(recipe_id: rand(41..50), ingredient_id: rand(1..250), quantity: Faker::Food.measurement)
end

8.times do
  Kitchen.create(name: Faker::Address.unique.country, user_id: rand(1..2))
end

50.times do
  Instruction.create(recipe_id: rand(1..10), stage: rand(1..3), action:Faker::Verb.base, duration: rand(1..100))
  Instruction.create(recipe_id: rand(11..20), stage: rand(1..3), action:Faker::Verb.base, duration: rand(1..100))
  Instruction.create(recipe_id: rand(21..30), stage: rand(1..3), action:Faker::Verb.base, duration: rand(1..100))
  Instruction.create(recipe_id: rand(31..40), stage: rand(1..3), action:Faker::Verb.base, duration: rand(1..100))
  Instruction.create(recipe_id: rand(41..50), stage: rand(1..3), action:Faker::Verb.base, duration: rand(1..100))

end


3.times do
  Dish.create(kitchen_id: 1, recipe_id: rand(1..50))
  Dish.create(kitchen_id: 2, recipe_id: rand(1..50))
  Dish.create(kitchen_id: 3, recipe_id: rand(1..50))
  Dish.create(kitchen_id: 4, recipe_id: rand(1..50))
  Dish.create(kitchen_id: 5, recipe_id: rand(1..50))
  Dish.create(kitchen_id: 6, recipe_id: rand(1..50))
  Dish.create(kitchen_id: 7, recipe_id: rand(1..50))
  Dish.create(kitchen_id: 8, recipe_id: rand(1..50))
end
