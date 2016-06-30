//Navigation View
var SearchView = Backbone.View.extend({
	tagName: "nav",
  template: _.template('<input id=searchbox style="float:left" type=text placeholder=insert ></input>'),

  events: {
    "change": function(e) {
      this.model.entry(e);
      $('#searchbox').empty()
      this.render();
    }
  },
  initialize: function() {
    this.render();

  },

  render: function(){
    this.$el.append(this.$el.html(this.template))
  }
})