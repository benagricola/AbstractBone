require(
	[	
	 	'order!common/underscore', 
	 	'order!common/underscore-string',
		'order!common/jquery-ui', 
		'order!common/jquery-tmpl', 
		'order!common/jquery-mousewheel', 
		'order!common/jquery-scrollpane', 
		'order!common/jquery-serializeobject',
		'order!common/jquery-cookie',
		'order!common/backbone',
		'order!common/json2',
		'order!common/jquery.fileupload',
		'order!common/jquery.fileupload-ui',
		'order!common/jquery.Jcrop'
	], function(underscore,underscore_string)
	{

		_.mixin(underscore_string);
		
		require(
			['controller/app'], function(controller_app)
			{
				
				Function.prototype.bind = function(scope) {
				  var _function = this;
				  
				  return function() {
				    return _function.apply(scope, arguments);
				  };
				};

				if(typeof console === "undefined") {
				    console = { log: function() { }, debug: function() { }, info: function() { }, warn: function() { }, error: function() { } };
				}
					
				console.log('All JS Loaded!');
				
				/*
				 * Define window.app and window.app.event here so we can set up
				 * global event binds from the initialise methods of each view
				 * which are instantiated before window.app is properly loaded
				 * (when the DOM is ready).
				 */
				
				window.app = {event: {}};
				
				_.extend(window.app.event, Backbone.Events);
				
				require.ready(function() {
					
					_.extend(window.app,new controller_app());
					
					/*
					 * Bind global events using jQuery here. Not particularly nice,
					 * but easiest way to track global (document,window) events
					 * and pass them off for handling by the app.
					 */
					$(document).keydown(window.app.keyDown);
					
					$(document).keyup(window.app.keyUp);
					
					$(window).resize(window.app.windowResize);
					
					
					Backbone.history.start();
				});
			}
		);
	}
);