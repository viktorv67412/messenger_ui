var button = document.getElementById("button_id");

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
	}
});

var PeopleCollection = Backbone.Collection.extend({model: Person});

/*var peopleModel = new PeopleModel([
	{'login': 'vasya', 'password': 'qwerty', 'realName': 'vasya', 'phoneNumber': "12345678", 'email': 'vasya@gmail.com'},
	{'login': 'person', 'password': 'person', 'realName': '???', 'phoneNumber': "888", 'email': 'person2@gmail.com'}
	]);*/

	button.addEventListener("click", function(){
		var peopleCollection = new PeopleCollection();

		peopleCollection.add({'login': document.getElementById('login').value,
								'password': document.getElementById('password').value,
								'realName': document.getElementById('realName').value,
								'phoneNumber': document.getElementById('phoneNumber').value});	

		console.log('addEventListener');

		doView(peopleCollection);

	});  
