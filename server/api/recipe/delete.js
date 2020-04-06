const recipeModel = require('./recipe');
const error = require('../util/error');
const modelDelete = require('../util/delete');

const recipeDelete = async (request, response) => {
    try {
      modelDelete.modelDelete(response, 'Recipe', recipeModel, request.params.id);
    } catch (err) {
      error.errorHandling(response, err);
    }
  }
  
  module.exports = {
    recipeDelete
  }