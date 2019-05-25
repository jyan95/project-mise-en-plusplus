# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username:'josh')
User.create(username:'john')
Kitchen.create(name: 'asian', user_id: 1)
Kitchen.create(name: 'breakfast', user_id: 2)
Recipe.create(name: 'food')
Ingredient.create(name: 'octopus')
RecipeIngredient.create(recipe_id:1, ingredient_id:1, quantity: '6 cups')
Dish.create(kitchen_id: 1, recipe_id: 1)
Instruction.create(recipe_id: 1, stage: 1, action: 'cut', duration: 200)
