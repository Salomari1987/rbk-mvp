//ContactView
var ContactView = Backbone.View.extend({
	className:"col-md-8 contact",
	events: {
    	'click': function() {
    		this.$el.children().detach();
    	}  
  	},
	template:function(){
	    if (this.names){
	      if(this.phoneNumbers){
	          return _.template('<td><p id=contactview>Full Name: <%= names[0].displayName %><br>Phone Number: <%= phoneNumbers[0].value %></p></td>', this)
	       }
	       return _.template('<td><p id=contactview>Full Name: <%= names[0].displayName %><br>Phone Number: No phone numbers to display</p></td>', this)
	     } else if(this.phoneNumbers){
	       return _.template('<td><p id=contactview> Full Name: No names to display<br>Phone Number: <%= phoneNumbers[0].value %></p></td>', this)
	     }
	     return _.template('<td><p id=contactview> Full Name: No names to display<br>Phone Number: No phone numbers to display</p></td>')
 	 },
  	initialize: function() {

  	},

	chooseContact: function(contact){
		this.model = contact;
		this.render();
	},

	render: function(){
    	this.$el.children().detach();
    	this.$el.append('<img id=currentContact src=http://files.itproportal.com/wp-content/uploads/photos/anon_1.jpeg>').append(this.template.call(this.model.attributes))
	}

});
