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
                this._view.render();
            }
           
        });

    }
);
