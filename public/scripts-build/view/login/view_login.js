define(["text!template/login/login.html"],function(a){return Backbone.View.extend({_template:a,initialize:function(){console.log("LoginView.init")},render:function(){console.log("LoginView.render");$(this.el).html($(this._template)).hide();$("body").append(this.el)},show:function(){console.log("LoginView.show");$(this.el).show()},hide:function(){console.log("LoginView.hide");$(this.el).hide()}})});