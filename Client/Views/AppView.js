// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.contactView = new ContactView({model: this.model.get('currContact')});
    this.contactlistView = new ContactListView({collection: this.model.get('contacts')});
    this.searchView = new SearchView({collection: this.model.get('searchfields')});

    // this.model.on('', function(model){
    // }, this);
  },

  render: function(){
    return this.$el.html([
      this.searchView.$el,
      this.contactlistView.$el,
      // this.contactView.$el,
    ]);
  }

});
