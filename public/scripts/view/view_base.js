define(
	[
		 'i18n!nls/app_strings'
	],function(strings_app)
	{
		var view = Backbone.View.extend({
			
			_strings: strings_app,
			_templateOptions: null,
			
			el: null,
			
			_template: null,
			_views: 
			{
				
			},
			
			events: {},
			
			bindToEvents:  ['windowResizedEvent','menuEvent','contentEvent','controllerSwitchedEvent','workspaceSwitchedEvent','workspaceLoadedEvent','keyPressedEvent'],
			
			_controller: null,
			
			initialize: function()
			{
				_.bindAll(this);
				
				this._controller = this.options.controller;
				
				this._bindEvents();
			},
			
			_bindEvents: function()
			{
				_.each(this.bindToEvents, 
					function(eventName)
					{ 

						if(_.isFunction(this[eventName]))
						{
							_.bindAll(this,eventName);
							
							window.app.event.bind(eventName,this[eventName]);
						}
					}.bind(this)
				);
				
			},

			render: function(templateOptions)
			{
				$(this.el).hide();
				
				if (! _.isUndefined(templateOptions)) {
					this._templateOptions = templateOptions;
				}
				
				console.log('RENDER BASE');
				$(this.el).html($(this._template).tmpl({'strings': this._strings, templateOptions: this._templateOptions}));

				this.delegateEvents();
				
				$(this.el).fadeIn();
				
				return this;
			}

		});
		
		return view;
		
	}
);