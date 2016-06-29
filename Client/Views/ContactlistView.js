//Contact List View
var ContactListView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('change remove', this.render, this)
    this.render();
  },

  render: function(){
    this.$el.children().detach();
    
    this.$el.html('<th>Contacts</th>').append(
      this.collection.map(function(contact){
        return new ContactListEntryView({model: contact}).render();
      })
    );
  }

});
