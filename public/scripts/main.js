require(
	[	
		'routermanifest',
		'order!common/jquery', 
		'order!common/jquery-ui', 
		'order!common/jquery-tmpl', 
		'order!common/underscore', 
		'order!common/backbone'
		
	], function(routerManifest)
	{ console.log('MANIFEST-',routerManifest);
		require(routerManifest, function()	
			{
				for(var i=0; i<arguments.length; i++) {
					new arguments[i]();
				}
				Backbone.history.start();
			}
		);
	}
);
