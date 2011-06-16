#! /usr/bin/env python
import sys
import os
import io
 
 
# Check that we are in an abstract bone environment
if os.path.isdir(os.getcwd() + '/controller') == False:
    print "This does not look like an abstractBone environment, please cd to the scripts directory"
    sys.exit()
elif os.path.isdir(os.getcwd() + '/template') == False: 
    print "This does not look like an abstractBone environment, please cd to the scripts directory"
    sys.exit()
elif os.path.isdir(os.getcwd() + '/template') == False: 
    print "This does not look like an abstractBone environment, please cd to the scripts directory"
    sys.exit()
    
    
# CONTROLLER TEMPLATE
controllerTemplate = "define( \n\
    [ \n\
     'view/[[name]]/view_[[name]]' \n\
    ], \n\
    function(View) \n\
    {\n\
        \n\
        return Backbone.Controller.extend(\n\
        {\n\
            \n\
            routes: {\n\
                \"[[name]]\": \"index\"\n\
            },\n\
            \n\
            _view: new View(),\n\
            \n\
            initialize: function()\n\
            {\n\
                // Init code \n\
            },\n\
            \n\
            index: function()\n\
            {\n\
                this._view.render();\n\
            }\n\
            \n\
        });\n\
\n\
    }\n\
);"

viewTemplate = "define(\n\
    [\n\
         'text!template/[[controller]]/[[name]].html'\n\
    ],\n\
    function(template) \n\
    {\n\
    \n\
        return Backbone.View.extend(\n\
        {\n\
            el: '#YOUR_ELEMENT_ID',\n\
            _template: template,\n\
            \n\
            events: {\n\
                // Events here\n\
            },\n\
            \n\
            initialize: function()\n\
            {\n\
                \n\
            },\n\
        \n\
            render: function()\n\
            { \n\
                $(this.el).html(this._template);\n\
                \n\
                this.delegateEvents();\n\
            }\n\
            \n\
            \n\
        });\n\
\n\
    }\n\
);"

templateTemplate = "<script id=\"[[controller]]_[[name]]Template\" type=\"text/x-jquery-tmpl\">\n\
    <h2>[[controller]] [[name]]</h2>\n\
</script>"
    
    
# Function definitions for the different create methods ------------
# @todo: Add some validation to make sure we cant add junky file names
def addController(name):
    try:
        print "trying to add controller", name
        fileName = os.getcwd() + "/controller/" + str.lower(name) + ".js"
        file = io.open(fileName, "wb")
        file.write(controllerTemplate.replace('[[name]]', name))
        file.close()
        addView('index', name)
        addTemplate('index', name)
    except:
        print "ERROR", sys.exc_info()
        
      
def addView(name, controller):
    try:
        print "trying to add view", name, "to", controller
        fileName = os.getcwd() + "/view/" + str.lower(controller) + "/" + str.lower(name) + ".js"
        if os.path.isdir(os.getcwd() + "/view/" + str.lower(controller)) == False:
            os.mkdir(os.getcwd() + "/view/" + str.lower(controller), 0755)
        file = io.open(fileName, "wb")
        fileContent = viewTemplate.replace('[[controller]]', controller)
        file.write(fileContent.replace('[[name]]', name))
        file.close()
        addTemplate(name, controller)
    except:
        print "ERROR", sys.exc_info()
        

def addTemplate(name, controller):
    try:
        print "trying to add template", name, "to", controller
        fileName = os.getcwd() + "/template/" + str.lower(controller) + "/" + str.lower(name) + ".html"
        if os.path.isdir(os.getcwd() + "/template/" + str.lower(controller)) == False:
            os.mkdir(os.getcwd() + "/template/" + str.lower(controller), 0755)
        file = io.open(fileName, "wb")
        fileContent = templateTemplate.replace('[[controller]]', controller)
        file.write(fileContent.replace('[[name]]', name))
        file.close()
    except:
        print "ERROR", sys.exc_info()
                
        
# MAIN FLOW ---------------------------------------------------------
# Get the first arg command
try:
    theCommand = sys.argv[1]
except:
    print "Please specify a command. Possible Commands:\n[create]"
    sys.exit()
    
    
# Switch the action
if theCommand == 'create':
    try:
        theType = sys.argv[2]
        
    except:
        print "Create usage:\n create controller [name]\n create view [controllerName] [viewName]\n create template [controllerName] [templateName]"
        sys.exit()

    if theType == "controller":
        theName = sys.argv[3]
        addController(theName)
    elif theType == "view":
        theController = sys.argv[3]
        theName = sys.argv[4]
        addView(theName, theController)
    elif theType == "template":
        theController = sys.argv[3]
        theName = sys.argv[4]
        addTemplate(theName, theController)
    else:
        print theType, "not yet implemented"

