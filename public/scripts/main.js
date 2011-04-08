require(
	[	
		'order!common/jquery', 
		'order!common/jquery-ui', 
		'order!common/jquery-tmpl', 
		'order!common/underscore', 
		'order!common/backbone'
	], function()
	{
		require(
			[
			 	'controller/app'
			], function(controller_app)
			{
				console.log('All JS Loaded!');
				
				window.app = new controller_app();
				console.log(Backbone);
				Backbone.history.start();
			}
		);
	}
);