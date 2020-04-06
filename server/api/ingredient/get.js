const ingredientModel = require('./ingredient');
const get = require('../util/get');

const ingredientList = async (request, response) => {
  await get.list(ingredientModel, request, response);
}

const ingredientDetail = async (request, response) => {
  await get.detail(ingredientModel, request, response);
}

module.exports = {
    ingredientList,
    ingredientDetail
}