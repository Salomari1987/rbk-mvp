//ContactView
var ContactView = Backbone.View.extend({
	
	template: _.template('<span style:"font-weight:bold">(<%= name %>)</span><br><span><%= phoneNumber %></span><br><span>Email: <%= emailAddress %></span>'),

  	initialize: function() {
    	this.$el.on('close', (function () { 
    		this.model.close()}).bind(this)
    		);
  	},

	chooseContact: function(contact){
		this.model = contact;
		this.render();
	},

	render: function(){
    	return this.$el.html(this.template(this.model.attributes));
	}

});
