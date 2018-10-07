var sg = require("sendgrid")(process.env.SENDGRID_API_KEY);

function makeRequest(from, subject, content) {
	console.log(from);
	console.log(process.env.SENDGRID_API_KEY);
	return sg.emptyRequest({
		method: 'POST',
		path: '/v3/mail/send',
		body: {
			personalizations: [{
				to: [{
					email: "stevenmorris996@gmail.com", from
				}, ],
				subject: subject,
			}, ],
			from: {
				email: from,
			},
			content: [{
				type: 'text/plain',
				value: "You got a message from " + from + ": " + "Thank you for Signing up for our alerts ",
			}, ],
		},
	});
};

exports.sendEmail = function (from, subject, content) {
	var request = makeRequest(from, subject, content);
	//With promise
	return sg.API(request)
		.then(response => {
			console.log(response.statusCode);
			console.log(response.body);
			console.log(response.headers);
		})
		.catch(error => {
			//error is an instance of SendGridError
			//The full response is attached to error.response
			console.log(error.response.body);
		});
}
// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'stevenmorris996@gmail.com',
//     pass: 'mario1340'
//   }
// });

// var mailOptions = {
//   from:{ email: from},
//   to: 'stevenmorris996@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });