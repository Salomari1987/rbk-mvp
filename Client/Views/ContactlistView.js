//Contact List View
var ContactListView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('change remove', this.render, this)
    this.render();
  },

  render: function(){
    this.$el.children().detach();
    console.log(this.collection, 'contact list view')
    this.$el.html('<th>Contacts</th>').append(
      this.collection.map(function(contact){
        console.log(contact, 'contactlist view')
        return new ContactListEntryView({model: contact}).render();
      })
    );
  }

});
