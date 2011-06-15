define(
		[ 'view/app/view_app' ],
		function(View_App ) {

			return Backbone.Controller
					.extend({

						// Controller Array
						_ctl : {},

						_options : {},

						routes : {
							"index" : "index",
						},

						/*
						 * Store keybind function names next to their keyCode
						 * values. Key binds will be handled by binding directly
						 * to the window object, since this cannot be done via
						 * event delegation in backbone (see main.js for
						 * implementation)
						 */
						keyBinds : {
							37 : 'arrowLeft',
							38 : 'arrowUp',
							39 : 'arrowRight',
							40 : 'arrowDown'
						},

						_view : null,

						_listenForGlobalKeys : true,

						/*
						 * Handle global keybinds in the app. When a modal
						 * window is opened (listen for modalOpen / modalClosed
						 * events), disable global key listening until the modal
						 * is closed again. Prevent defaults on the event where
						 * required to stop browser default functionality.
						 */
						keyDown : function(e) {

							if (!_.isUndefined(window.app.keyBinds[e.keyCode])
									&& this._listenForGlobalKeys) {
								e.preventDefault();
							}

						},

						keyUp : function(e) {
							if (!_.isUndefined(this.keyBinds[e.keyCode])
									&& this._listenForGlobalKeys) {
								window.app.event.trigger("keyPressedEvent",
										this.keyBinds[e.keyCode]);
								e.preventDefault();
							}
						},
						
						windowResize: function(e)
						{
							window.app.event.trigger("windowResizedEvent",e);
							e.preventDefault();
						},

						
	
						initialize : function(options) {
							_.bindAll(this, 'keyDown', 'keyUp');

							
							window.app.event.bind("sessionExpiryEvent",this.sessionExpired);


							// Create the AppView
							this._view = new View_App({
								controller : this
							});

							// Set the options
							this._options = options;

							// Render the default view
							this._view.render({});

						},
						

						index : function() {
							console.log('Trigger Index');
							window.app.event.trigger("controllerSwitchedEvent",
									this);

						}
						
					});

		});
