define(
	[
		 'text!template/app/left.html'
	],
	function(template) 
	{
	
		return Backbone.View.extend(
		{
			el: '#left',
			
			_template: template,
			
			initialize: function()
			{
				// Create left app view
				console.log('AppLeftView');
				console.log(this);
			},
		
			render: function()
			{
				$(this.el).html(this._template);
				
				console.log('AppLeftView RENDER');
			}
		});
	}
);