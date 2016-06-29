// Search box
var SearchBoxView = Backbone.View.extend({

  template: _.template('<input id=<%= field %> type=text placeholder=<%= field %>></input>'),
    events: {
    'change': function(e) {
    	this.model.entry(e)
    }
  },
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
