define(
    [
         'text!template/[[router]]/[[name]].html'
    ],
    function(template) 
    {
    
        return Backbone.View.extend(
        {
            
            events: {
                // Events here
            },
            
            initialize: function()
            {
                
            },
        
            render: function()
            { 
                $(this.el).html($(template).tmpl());
                this.delegateEvents();
            }
            
            
        });

    }
);
