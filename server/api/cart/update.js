const recipeModel = require('../recipe/recipe');
const error = require('../util/error');
const cartModel = require('./cart');
const createRecipe = require('../recipe/create');
const creation = require('../util/create');
const mongoose = require('mongoose');

const cartUpdate = async (request, response) => {
  try {
    let recipes = [];
    let orders_new = []
    if (typeof request.body.recipe === 'undefined') {
      return response.status(400).send('No recipe input');
    }
    
    for(let i = 0; i < request.body.recipe.split(',').length; i++){
        recipes = await creation.validation(request.body.recipe.split(',')[i], recipeModel, createRecipe.recipeCreatePost, recipes, response);
    }
    for(let k = 0; k < recipes.length; k++){
        orders_new.push({
            recipeId : recipes[k],
            values : request.body.values.split(',')[k],
            cost: parseInt(request.body.values.split(',')[k]) * parseInt(request.body.costs.split(',')[k])
        })
    }
    
    if (recipes.length < 0) {
      return response.status(400).send('Invalid Recipe');
    }


    const cart = await cartModel.findById(request.params.id).exec();
    cart.deliverydate = request.body.deliverydate;
    cart.orders = orders_new;

    await cart.save();
    const res = {
      message: "cart successfully updated",
      id: cart._id
    };
    return response.status(200).send(res);

  } catch (err) {
    error.errorHandling(response, err);
  }
}

module.exports = {
  cartUpdate
}