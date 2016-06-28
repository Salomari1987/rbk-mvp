// Search Button\
var SearchButtonView = Backbone.View.extend({
  
  template: _.template('<button>Filter</button>'),

  events: {
    'click': function() {
      this.collection.find();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
