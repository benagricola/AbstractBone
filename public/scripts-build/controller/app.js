define(["view/app/view_app","controller/login"],function(a,b){return Backbone.Controller.extend({_ctl:{},routes:{"":"index",login:"login"},_appView:new a,initialize:function(){this._appView.render()},index:function(){},login:function(){console.log("AppView.login");if(_.isUndefined(this._ctl.login))this._ctl.login=new b;this._ctl.login.show()}})});