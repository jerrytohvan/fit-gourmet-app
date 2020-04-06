const stripe = require('stripe')('sk_test_q5nria9dumRl7DuWUmYLYkvo00aPJwl6BT');

stripe.charges.retrieve('ch_1GRcQH2eZvKYlo2CiannS4cM', {
    api_key: 'sk_test_q5nria9dumRl7DuWUmYLYkvo00aPJwl6BT'
  });

const paymentIntent = await stripe.paymentIntents.create({
    payment_method_types: ['card'],
    amount: request.body,
    currency: 'sgd',
  }, {
    stripeAccount: 'sk_test_q5nria9dumRl7DuWUmYLYkvo00aPJwl6BT',
  }).then(function(paymentIntent) {
    // asynchronously called
  });