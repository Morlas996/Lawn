var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.charge = function(token, amount) {
	return stripe.charges.create({
		///// is this where i make the amount the total cost of all items in the checkout?
		amount: amount, // amount in cents
		currency: 'usd',
		source: token,
		description: 'Statement description'
	});
	// returning a promise, so when we call .charge, we can use .then(...)
};
