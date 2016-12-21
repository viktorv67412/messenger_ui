
var PeopleModel = Backbone.Collection.extend({
	model: Person
});

var peopleModel = new PeopleModel([
	{'login': 'vasya', 'password': 'qwerty', 'realName': 'vasya', 'phoneNumber': "12345678", 'email': 'vasya@gmail.com'},
	{'login': 'person', 'password': 'person', 'realName': '???', 'phoneNumber': "888", 'email': 'person2@gmail.com'}
]);
