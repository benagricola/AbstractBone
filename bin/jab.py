#! /usr/bin/env python
import sys
import os
import io
from _pyio import open
 
 
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
    function(view) \n\
    {\n\
        \n\
        return Backbone.Controller.extend(\n\
        {\n\
            \n\
            routes: {\n\
                \"[[name]]\": \"index\"\n\
            },\n\
            \n\
            _view: new view(),\n\
            \n\
            initialize: function()\n\
            {\n\
                // Init code \n\
            },\n\
            \n\
            index: function()\n\
            {\n\
                this._view.render();\n\
            },\n\
            \n\
        });\n\
\n\
    }\n\
);"
    
    
# Function definitions for the different create methods ------------
# @todo: Add some validation to make sure we cant add junky file names
def addController(name):
    try:
        print "trying to add controller", name
        fileName = os.getcwd() + "/controller/" + str.lower(name) + ".js"
        file = io.open(fileName, "wb")
        file.write(controllerTemplate.replace('[[name]]', name))
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
    else:
        print theType, "not yet implemented"

