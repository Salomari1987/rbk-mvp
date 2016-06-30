//Contact List Entry View
var ContactListEntryView = Backbone.View.extend({

  tagName: 'tr',

  template:function(){
    console.log(this.names, 'template')
    if (this.names){
      if(this.phoneNumbers){
          return _.template('<td style:"font-weight:bold"><%= names[0].displayName %></td><br><td><%= phoneNumbers[0].value %></td>', this)
       }
       return _.template('<td style:"font-weight:bold"><%= names[0].displayName %></td><br><td>No phone numbers to display</td>', this)
     } else if(this.phoneNumbers){
       return _.template('<td style:"font-weight:bold"> No names to display </td><br><td><%= phoneNumbers[0].value %></td>', this)
     }
     return _.template('<td style:"font-weight:bold"> No names to display </td><br><td>No phone numbers to display</td>')
  },
  events: {
    'click': function() {
      this.model.select();      
    }  
  },

  render: function(){
      return this.$el.html(this.template.call(this.model.attributes, this.model.attributes));  
  }

});
