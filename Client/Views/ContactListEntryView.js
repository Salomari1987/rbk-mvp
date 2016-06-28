//Contact List Entry View
var ContactListEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td style:"font-weight:bold"><%= names[0].displayName %></td><br><td><%= phoneNumbers[0].value %></td>'),

  events: {
    'click': function() {
      this.model.select();      
    }  
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
