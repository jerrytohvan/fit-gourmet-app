const recipeModel = require('./recipe');
const error = require('../util/error');

const recipeUpdatePost = async (request, response) => {
  try {
    const recipe = await recipeModel.findById(request.params.id).exec();
    recipe.name = request.body.name;
    recipe.allergies = request.body.allergies;
    recipe.diettype = request.body.diettype;
    recipe.save();
    const res = {
      message: "Recipe succssfully updated",
      name: recipe.name
    };
    return response.status(200).send(res);

  } catch (err) {
    error.errorHandling(response, err);
  }
}

module.exports = {
    recipeUpdatePost
}