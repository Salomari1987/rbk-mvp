//Contact List Entry View
var ContactListEntryView = Backbone.View.extend({

  tagName: 'li',
  className: 'contactEntry',
  template:function(){
    console.log(this.names, 'template')
    if (this.names){
      if(this.phoneNumbers){
          return _.template('<p style:"font-weight:bold"><%= names[0].displayName %></p>', this)
       }
       return _.template('<p style:"font-weight:bold"><%= names[0].displayName %></p>', this)
     } else if(this.phoneNumbers){
       return _.template('<p style:"font-weight:bold"> No names to display</p>', this)
     }
     return _.template('<p style:"font-weight:bold"> No names to display</p>')
  },
  events: {
    'click': function() {
      this.model.select();      
    }  
  },

  render: function(){
    return this.$el.append('<img src=http://files.itproportal.com/wp-content/uploads/photos/anon_1.jpeg class="profile">').append(this.template.call(this.model.attributes, this.model.attributes));    
  }

});
