const recipeModel = require('./recipe');
const error = require('../util/error');

const recipeCreatePost = async function (req, response, next) {
    try {
        let recipe = null;
        if (typeof req.body !== 'undefined') {
            recipe = await create(req.body);
            const result = {
                message: "recipe successfully created",
                id: recipe._id
            };
            return response.status(200).send(result);
        } else {
            recipe = await create(req);
            return recipe;
        }
    } catch (err) {
        error.errorHandling(response, err);
    }
}

const create = function (json) {
    let ingredients_new = []
    if (json.ingredients.length > 1) {
        for (let i = 0; i < json.ingredients.length; i++) {
            ingredients_new.push({
                ingredientName: json.ingredients[i].split(',')[0],
                weight: json.ingredients[i].split(',')[1],
            })
        }
        recipe = new recipeModel({
            _id: json._id,
            name: json.name,
            allergies: json.allergies,
            diettype:json.diettype,
            recipeCounter: json.recipeCounter,
            ingredients: ingredients_new
        })
    } else {
        recipe = new recipeModel({
            _id: json._id,
            name: json.name,
            allergies: json.body.allergies,
            diettype:json.diettype,
            recipeCounter: json.recipeCounter,
            ingredients: ingredients_new.push({
                ingredientName: json.ingredients.split(',')[0],
                weight: json.ingredients.split(',')[1],
            })
        })
    }
    return recipe.save();
}

module.exports = {
    recipeCreatePost
}