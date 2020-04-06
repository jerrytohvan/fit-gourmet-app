const cartModel = require('./cart');
const error = require('../util/error');
const modelDelete = require('../util/delete');

const cartDelete = async (request, response) => {
    try {
      modelDelete.modelDelete(response, 'Cart', cartModel, request.params.id);
    } catch (err) {
      error.errorHandling(response, err);
    }
  }
  
  module.exports = {
    cartDelete
  }