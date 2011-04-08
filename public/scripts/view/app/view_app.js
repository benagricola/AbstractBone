define(
	[
		 'view/app/view_left',
		 'view/app/view_right',
		 'text!template/app/app.html'
	],
	function(view_left,view_right,template_app) 
	{
	
		return Backbone.View.extend(
		{
			el: '#app',
			
			_template: template_app,
			
			_views: 
			{
				left: new view_left(),
				right: new view_right()
			},
			
			initialize: function()
			{
				// Create main app view
				console.log('AppView');
				console.log(this);
			},
		
			render: function()
			{
				$(this.el).html(this._template);
				this._views.left.render();
				this._views.right.render();
			}
		});
	}
);