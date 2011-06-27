define(
    [
     'view/[[name]]/view_index'
    ],
    function(View)
    {
       
        return Backbone.Controller.extend(
        {
           
            routes: {
                "[[name]]": "index"
            },
           
            _view: new View(),
           
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