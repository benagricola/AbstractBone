define(
    [
     'view/[[name]]/view_[[name]]'
    ],
    function(View)
    {
       
        return Backbone.Router.extend(
        {
           
            routes: {
                "[[name]]": "index"
            },
           
            initialize: function()
            {
                // Init code
            },
           
            index: function()
            {
            	[[name]]View = new View({
            		el: $("#app")
            	});
                [[name]]View.render();
            }
           
        });

    }
);
