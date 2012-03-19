define(
	[
	 'view/main/view_main'
	],
	function(View_Main) 
	{
		
		return Backbone.Router.extend(
		{
			routes: {
				"": "index"
			},
			
			
			index: function()
			{
				var mainView = new View_Main({
					el: $('#app')
				});
				mainView.render();
			}
			
		});

	}
);
