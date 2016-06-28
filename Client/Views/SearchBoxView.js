// Search box
var SearchBoxView = Backbone.View.extend({

  template: _.template('<input id=<%= name %> type=text placeholder=<%= name %>></input>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
