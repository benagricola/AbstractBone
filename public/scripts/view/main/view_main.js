define(
	[
		 'text!template/main/main.html'
	],
	function(template) 
	{
	
		return Backbone.View.extend(
		{
			
			initialize: function()
			{
				// Create main app view
				console.log('Main View Initialized');
			},
		
			render: function()
			{
				$(this.el).html($(template).tmpl());
			}
		});
	}
);
