define(
	[
		 'text!template/app/right.html'
	],
	function(template_right) 
	{
	
		var AppRightView = Backbone.View.extend(
		{
			el: '#right',
			_template: template_right,
			
			init: function()
			{
				// Create right app view
				console.log('AppRightView');
				console.log(this);
			},
		
			render: function()
			{
				$(this.el).html(this._template);
				
				console.log('AppRightView RENDER');
			}
		});
		
		return AppRightView;
	}
);