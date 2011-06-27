define(
    [
         'text!template/[[controller]]/[[name]].html'
    ],
    function(template) 
    {
    
        return Backbone.View.extend(
        {
            el: '#YOUR_ELEMENT_ID',
            _template: template,
            
            events: {
                // Events here
            },
            
            initialize: function()
            {
                
            },
        
            render: function()
            { 
                $(this.el).html(this._template);
                
                this.delegateEvents();
            }
            
            
        });

    }
);