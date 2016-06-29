//Navigation View
var SearchView = Backbone.View.extend({
	tagName: "nav",
  // events: {
  //   "change": function(e) {
  //     this.collection.x()
  //   }
  // },
  initialize: function() {
    this.render();

  },

  render: function(){
    this.$el.append(
      this.collection.map(function(field){
        return new SearchBoxView({model: field}).render();
      })).append(
    	new SearchButtonView({collection:this.collection}).render())
  }
})