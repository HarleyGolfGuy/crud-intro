var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
	var userSchema = new mongoose.Schema({
		email: String,
		first_name: String,
		last_name: String
	});
	var User = mongoose.model( 'User', userSchema );
	var seth = new User({
		email: 'sethwill@gmail.com',
		first_name: 'Seth',
		last_name: 'Williams'
	});
	seth.save(function(err, seth) {
		if (err) return console.error(err);
		console.dir(seth);
	});
});
