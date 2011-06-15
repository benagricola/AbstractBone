define(
	[
		 'view/view_base'
	],function(View_Base)
	{
		var view = View_Base.extend({
			
			collection: null,
			
			render: function(templateOptions)
			{

				_.extend(this,templateOptions);
				
				this.preRender()._render(templateOptions).postRender();
				console.log('BaseView.render');
				return this;
			}
			

		});
		
		return view;
		
	}
);