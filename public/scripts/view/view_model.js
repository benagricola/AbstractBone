define(
	[
		 'view/view_base'
	],function(View_Base)
	{
		var view = View_Base.extend({
			
			_model: null,
			
			_render: function()
			{
				var userAttributes = (!_.isNull(window._user))? window._user.attributes : {};
				
				$(this.el).html($(this._template).tmpl({'strings': this._strings,'user': userAttributes,'model': this._model}));

				this.delegateEvents();
				
				return this;
			}

		});
		
		return view;
		
	}
);