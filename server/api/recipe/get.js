const recipeModel = require('./recipe');
const get = require('../util/get');

const recipeList = async (request, response) => {
  await get.list(recipeModel, request, response);
}

const recipeDetail = async (request, response) => {
  await get.detail(recipeModel, request, response);
}

module.exports = {
    recipeList,
    recipeDetail
}