//App Model
var AppModel = Backbone.Model.extend({

  initialize: function(params){
  	this.set('currContact', new ContactModel());
  	
  	params.searchfield.on('findit', function (f){
  		var searchin = new RegExp(this.value.toLowerCase(), 'gi')
  		var results = _.filter(params.contacts.models, function(data){
  			return searchin.test(data.get('names')?data.get('names')[0].displayName:null) || searchin.test(data.get('phoneNumbers')?data.get('phoneNumbers')[0].value:null)
  		})
  		params.contacts.set(results);
  	})
  	}

 })