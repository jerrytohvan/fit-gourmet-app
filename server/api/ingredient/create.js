const ingredientModel = require('./ingredient');
const error = require('../util/error');

const ingredientCreatePost = async function (req, response, next) {
    try {
        let ingredient = null;
        if (typeof req.body !== 'undefined') {
            ingredient = await create(req.body);
            const result = {
                message: "ingredient successfully created",
                id: ingredient._id
            };
            return response.status(200).send(result);
        } else {
            ingredient = await create(req);
            return ingredient;
        }
    } catch (err) {
        error.errorHandling(response, err);
    }
}

const create = function (json) {
    let ingredient = new ingredientModel(json)
    return ingredient.save();
}

module.exports = {
    ingredientCreatePost
}