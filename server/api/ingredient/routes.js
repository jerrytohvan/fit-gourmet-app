const express = require('express');
const router = express.Router();

create = require('./create');
get = require('./get');
del = require('./delete');
update = require('./update');

router.post('/ingredient/create', create.ingredientCreatePost);

router.get('/ingredient', get.ingredientList);

router.get('/ingredient/:id',get.ingredientDetail)

router.post('/ingredient/:id/delete', del.ingredientDelete);

router.post('/ingredient/:id/update', update.ingredientUpdatePost);

module.exports = router;