define(
	[
	 'view/login/view_login',
	],
	function(view) 
	{
		
		return Backbone.Controller.extend(
		{
			
			routes: {
				"login/hide": "hide"
			},
			
			_view: new view(),
			
			initialize: function()
			{
				console.log('LoginController.init');
				this._view.render();
			},
			
			show: function()
			{
				console.log('LoginController.show');
				this._view.show();
			},
			
			hide: function()
			{
				console.log('LoginController.hide');
				this._view.hide();
			}
			
		});

	}
);
