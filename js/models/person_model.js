
var Person = Backbone.Model.extend({

	defaults: {
		login: '',
		password: '',
		realName: '',
		phoneNumber: '',
		email: ''
	},

	validate: function(attrs){

		console.log(attrs);

		if (attrs.name == '') {
			console.log('Plese, enter your name');
		} else if (attrs.password < 5) {
			if (attrs.password == '') {
				console.log('Please, enter your password');
			} else {
				console.log('Password must contain at least six digits');
			}
		} else if (attrs.realName == ''){
			console.log('Please enter your name');
		} else if (attrs.phoneNumber == '') {
			console.log('Plese enter your phone number');
		} else if (attrs.email == '') {
			console.log('Please enter your email');
		}
	},
});

var People = Backbone.Collection.extend({model: Person});
