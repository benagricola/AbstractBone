define(['view/app/view_app'],
	function(view_app) 
	{
		
		var AppController = Backbone.Controller.extend(
		{
			routes: {
				"": "index"
			},
			
			_appView: new view_app(),
			
			init: function()
			{
			},
			
			index: function()
			{
				this._appView.render();
			}
			
		});
		
		
		return AppController;
	}
);
