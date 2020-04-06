const ingredientModel = require('./ingredient');
const error = require('../util/error');

const ingredientUpdatePost = async (request, response) => {
  try {
    const ingredient = await ingredientModel.findById(request.params.id).exec();
    ingredient.name = request.body.name;
    // ingredient.cost = request.body.cost;
    ingredient.save();
    const res = {
      message: "Ingredient succssfully updated",
      name: ingredient.name
    };
    return response.status(200).send(res);

  } catch (err) {
    error.errorHandling(response, err);
  }
}

module.exports = {
    ingredientUpdatePost
}