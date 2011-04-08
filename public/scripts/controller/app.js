define(
	[
	 'view/app/view_app',
	 'controller/login'
	],
	function(view_app,controller_login) 
	{
		
		return Backbone.Controller.extend(
		{
			_ctl: {},
			
			routes: {
				"": "index",
				"login": "login"
			},
			
			_appView: new view_app(),
			
			initialize: function()
			{
				this._appView.render();
			},
			
			index: function()
			{
				
			},
			
			login: function()
			{
				console.log('AppView.login');
				if(_.isUndefined(this._ctl.login))
				{
					this._ctl.login = new controller_login();
				}
				
				this._ctl.login.show();
			}
			
		});

	}
);
