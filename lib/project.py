import io
import os
import sys
import abfunctions
import distutils.dir_util

abDir = os.getenv('ABSTRACT_BONE_DIR', False)

# Function definitions for the different create methods ------------
# @todo: Add some validation to make sure we can't add junky file names
def addController(name):
    
    print "Trying to add controller", name
    controllerTemplate = abfunctions.getTemplate('controller')
    fileName = os.path.abspath(os.getcwd() + "/scripts/controller/" + str.lower(name) + ".js")
    
    try:
        file = io.open(fileName, "wb")
        file.write(controllerTemplate.replace('[[name]]', name))
        file.close()
    except:
        print "ERROR:", sys.exc_info()
        sys.exit()
        
    addView('index', name)
    addTemplate('index', name)
        
        
        
      
def addView(name, controller):

    print "Trying to add view", name, "to", controller
    viewTemplate = abfunctions.getTemplate('view')
    fileName = os.path.abspath(os.getcwd() + "/scripts/view/" + str.lower(controller) + "/" + str.lower(name) + ".js")
    
    try:
        if os.path.isdir(os.getcwd() + "/scripts/view/" + str.lower(controller)) == False:
            os.mkdir(os.getcwd() + "/scripts/view/" + str.lower(controller), 0755)
        file = io.open(fileName, "wb")
        fileContent = viewTemplate.replace('[[controller]]', controller)
        file.write(fileContent.replace('[[name]]', name))
        file.close()
    except:
        print "ERROR:", sys.exc_info()
        sys.exit()
    
    
    

def addTemplate(name, controller):

    print "Trying to add template", name, "to", controller
    templateTemplate = abfunctions.getTemplate('template')
    fileName = os.path.abspath(os.getcwd() + "/scripts/template/" + str.lower(controller) + "/" + str.lower(name) + ".html")
    
    try:
        if os.path.isdir(os.getcwd() + "/scripts/template/" + str.lower(controller)) == False:
            os.mkdir(os.getcwd() + "/scripts/template/" + str.lower(controller), 0755)
        file = io.open(fileName, "wb")
        fileContent = templateTemplate.replace('[[controller]]', controller)
        file.write(fileContent.replace('[[name]]', name))
        file.close()
    except:
        print "ERROR:", sys.exc_info()
        sys.exit()
        
        
        
        
def createIn(path):
    
    abPublicDir = os.path.join(abDir, "public")
    print "Creating project in" , path
    
    try:
        distutils.dir_util.copy_tree(abPublicDir, path)
    except:
        print "ERROR:", sys.exc_info()
        sys.exit()
        
    print "Created project in", path