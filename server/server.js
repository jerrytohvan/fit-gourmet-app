const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// const passport = require('passport');
// [SH] Bring in the data model
require('./api/model/db');
// [SH] Bring in the Passport config after model is defined
// require('./api/user/passport');

// [SH] Initialise Passport before using the route middleware
// app.use(passport.initialize());

const ingredientRoutes = require('./api/ingredient/routes');

const recipeRoutes = require('./api/recipe/routes');

const cartRoutes = require('./api/cart/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/', ingredientRoutes);

app.use('/api/', recipeRoutes);

app.use('/api/',cartRoutes);
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});