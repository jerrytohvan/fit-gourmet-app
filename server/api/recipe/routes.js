const express = require('express');
const router = express.Router();

create = require('./create');
get = require('./get');
del = require('./delete');
update = require('./update');

router.post('/recipe/create', create.recipeCreatePost);

router.get('/recipe',get.recipeList);

router.get('/recipe/:id',get.recipeDetail);

router.post("/recipe/:id/update",update.recipeUpdatePost);

router.post("/recipe/:id/delete",del.recipeDelete);
module.exports = router;