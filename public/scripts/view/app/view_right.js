define(
	[
		 'text!template/app/right.html'
	],
	function(template) 
	{
	
		return Backbone.View.extend(
		{
			el: '#right',
			_template: template,
			
			initialize: function()
			{
				// Create right app view
				console.log('AppRightView');
				console.log(this);
			},
		
			render: function()
			{
				$(this.el).html(this._template);
				
				console.log('AppRightView RENDER');
			}
		});

	}
);