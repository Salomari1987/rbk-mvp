var starter = function(connections){
        console.log(connections, 'starter code')
        var contacts = new Contacts(connections);
        var searchfield = new SearchField()
        var app = new AppModel({contacts: contacts,
                                searchfield: searchfield});

        // build a view for the top level of the whole app
        var appView = new AppView({model: app});

        // put the view onto the screen
        $('body').append(appView.render());
    };