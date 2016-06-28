//Navigation View
var SearchView = Backbone.View.extend({
	tagName: "nav",

  	initialize: function() {
	    this.render();
  	},

  render: function(){

    this.$el.append(
      this.collection.map(function(field){
        return new SearchBoxView({model: field}).render();
      })
    );
  }
})