const ingredientModel = require('./ingredient');
const error = require('../util/error');
const modelDelete = require('../util/delete');

const ingredientDelete = async (request, response) => {
    try {
      modelDelete.modelDelete(response, 'Ingredient', ingredientModel, request.params.id);
    } catch (err) {
      error.errorHandling(response, err);
    }
  }
  
  module.exports = {
    ingredientDelete
  }