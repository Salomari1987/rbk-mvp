//Contact List View
var ContactListView = Backbone.View.extend({
  className: "col-md-4 col-sm-3",
  template: _.template('<ul id=listof class="nav nav-pills"></ul>'),
  initialize: function() {
    this.collection.on('change reset', this.render, this)
    this.render();
  },

  render: function(){
    this.$el.children().detach();
    console.log(this.collection, 'contact list view')
    this.$el.append(this.template())
    this.$('#listof').append(
      this.collection.map(function(contact){
        console.log(contact, 'contactlist view')
        return new ContactListEntryView({model: contact}).render();
      }))
  }

});
