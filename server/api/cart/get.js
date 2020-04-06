const cartModel = require('./cart');
const get = require('../util/get');

const cartList = async (request, response) => {
  await get.list(cartModel, request, response);
}

const cartDetail = async (request, response) => {
  await get.detail(cartModel, request, response);
}

module.exports = {
    cartList,
    cartDetail
}