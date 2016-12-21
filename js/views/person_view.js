
var person = new Person();

var PeopleView = Backbone.View.extend({
	tagName: 'ul',

	initialize: function() {
		this.render();
	},

	render: function(){
		this.collection.each(function(person) {
			var personView = new PersonView({model: person});
		  this.$el.append(personView.$el)
		}, this);
		return this;
	}
});

var PersonView = Backbone.View.extend({
		initialize: function() {
			this.render();
		},
	tagName: 'li',

	template: _.template($('#person_template').html()),

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

var peopleView = new PeopleView({collection: peopleModel});
$(document.body).append(peopleView.$el);
