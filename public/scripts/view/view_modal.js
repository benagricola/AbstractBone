define(
	[
	 'view/view_base'
	],function(base_view)
	{
		var view = base_view.extend({
			
			_width: 580,
			_height: 'auto',
			_modal: true,
			_title: "",
			
			initialize: function()
			{
				this._controller = this.options.controller;
				_.bindAll(this,'render','modalOpened','modalClosed');
				
				
				window.app.event.bind("modalOpened",this.modalOpened);
				
			},
		
			modalOpened: function(e)
			{
				if(e !== this)
				{
					//console.debug('modalOpened triggered a HIDE on:',e);
					this._hide(false);
				}
			},
			
			modalClosed: function(e)
			{
				if(e !== this)
				{
					
					//console.debug('modalClosed triggered a SHOW on:',e);
					
					this._show(false);
				}
			},
			
			render: function(templateOptions)
			{
				
				this.preRender()._render(templateOptions);
				
				$(this.el).dialog({
					title: this._title,
					autoOpen: false,
					height: this._height,
					width: this._width,
					modal: this._modal,
					resizable: false,
					show: 'fade',
					hide: 'fade',
					open: function()
					{
						window.app.event.trigger("modalOpened",this);
					}.bind(this),
					close: function()
					{
						window.app.event.trigger("modalClosed",this);
					}.bind(this),
					closeOnEscape: false
				});
				
				this.postRender();
				
				return this;
			},
			
			/*
			 * _hide and _show are the *actual methods* that hide and show
			 * the modal window. These are the methods that should be called
			 * from a controller to modify the visibility of a modal window.
			 */
			_show: function(trigger)
			{
			
				if(!$(this.el).dialog( "isOpen" ))
				{
					$(this.el).dialog('open');
				}
			},
			
			_hide: function(trigger)
			{

				if($(this.el).dialog( "isOpen" ))
				{
					$(this.el).dialog('close');
				}
				
			},
			
			/*
			 * hide and show are event-callbacks which should be triggered by
			 * events on a modal. These call the view controller when
			 * triggered, allowing additional functionality to be handled in
			 * the controller when a modal has to be hidden or shown.
			 */
			hide: function()
			{
				this._controller.hide();
			},
			
			show: function()
			{
				this._controller.show();
			}

		});

		return view;
		
	}
);