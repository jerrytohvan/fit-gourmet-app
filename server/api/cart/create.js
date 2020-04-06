const cartModel = require('./cart');
const error = require('../util/error');

const cartCreatePost = async function (req, response, next) {
    try {
        let cart = null;
        if (typeof req.body !== 'undefined') {
            cart = await create(req.body);
            const result = {
                message: "Cart successfully created",
                id: cart._id
            };
            return response.status(200).send(result);
        } else {
            cart = await create(req);
            return ingredient;
        }
    } catch (err) {
        error.errorHandling(response, err);
    }
}

const create = function (json) {
    let cart = new cartModel(json)
    return cart.save();
}

module.exports = {
    cartCreatePost
}