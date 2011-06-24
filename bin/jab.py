#! /usr/bin/env python
import sys
import os
import io
 
# Check for the ENV variables
abstractBoneDir = os.getenv('ABSTRACT_BONE_DIR', False)
if abstractBoneDir == False:
    print "FIRST RUN? Please set the ABSTRACT_BONE_DIR environment variable to the location of your Abstract Bone files."
    sys.exit()
else:
    if abstractBoneDir + '/lib' not in sys.path:
        sys.path.insert(0, abstractBoneDir + '/lib')
    import abfunctions
    import project
 
 
# Check that we are in an abstract bone environment TODO only if we are using a creation script
if not abfunctions.isAbstractBoneEnv():
    print "ERROR: This does not look like an abstractBone environment, please cd to the scripts directory of your project."
    sys.exit()

        
        
                
        
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
        project.addController(theName)
    elif theType == "view":
        theController = sys.argv[3]
        theName = sys.argv[4]
        project.addView(theName, theController)
    elif theType == "template":
        theController = sys.argv[3]
        theName = sys.argv[4]
        project.addTemplate(theName, theController)
    else:
        print theType, "not yet implemented"

