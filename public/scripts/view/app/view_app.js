define(
	[
	 	'view/view_base',
	 	'text!template/app/app.html'
	],
	function(View_Base,template_app) 
	{
	
		var view = View_Base.extend(
		{
			el: '#app',
			
			events: {
			},
			
			_template: template_app,
			
			
			// Override base method from view_base
			initialize: function()
			{

				this._controller = this.options.controller;

				this._bindEvents();
				
				// Create main app view
				console.log('AppView');
				
				//this.render = this._render;
			},
			
			render: function(templateOptions)
			{
				console.log('RENDER APP');
				View_Base.prototype.render.call(this,templateOptions);
				
				console.log('POST RENDER FIRED');
			}

		});

		
		return view;
	}
);