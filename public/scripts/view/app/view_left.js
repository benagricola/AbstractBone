define(
	[
		 'text!template/app/left.html'
	],
	function(template_left) 
	{
	
		var AppLeftView = Backbone.View.extend(
		{
			el: '#left',
			
			_template: template_left,
			
			init: function()
			{
				// Create left app view
				console.log('AppLeftView');
				console.log(this);
			},
		
			render: function()
			{
				$(this.el).html(this._template);
				
				console.log('AppLeftView RENDER');
			}
		});
		
		return AppLeftView;
	}
);