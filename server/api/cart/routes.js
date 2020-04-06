const express = require('express');
const router = express.Router();

create = require('./create');
get = require('./get');
del = require('./delete');
update = require('./update');

router.post('/cart/create', create.cartCreatePost);

router.get('/cart', get.cartList);

router.get('/cart/:id',get.cartDetail);

router.post('/cart/:id/delete', del.cartDelete);

router.post('/cart/:id/update', update.cartUpdate);

module.exports = router;