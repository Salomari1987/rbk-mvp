//App Model
var AppModel = Backbone.Model.extend({

  initialize: function(params){
  	this.set('currContact', new ContactModel());
  	
  	params.searchfields.on('findit', function (f){
  		var nameSearch = new RegExp(this.at(0).value.toLowerCase(), 'gi')
  		var results = _.filter(params.contacts.models, function(data){
  			// console.log(data.get('names')[0].displayName)
  			return nameSearch.test(data.get('names')[0].displayName)
  		})
  		params.contacts.set(results);
  	})


  	}

 })