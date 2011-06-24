import io
import os
import sys
import abfunctions

# Function definitions for the different create methods ------------
# @todo: Add some validation to make sure we can't add junky file names
def addController(name):
    
    print "Trying to add controller", name
    controllerTemplate = abfunctions.getTemplate('controller')
    fileName = os.path.abspath(os.getcwd() + "/controller/" + str.lower(name) + ".js")
    
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
    fileName = os.path.abspath(os.getcwd() + "/view/" + str.lower(controller) + "/" + str.lower(name) + ".js")
    
    try:
        if os.path.isdir(os.getcwd() + "/view/" + str.lower(controller)) == False:
            os.mkdir(os.getcwd() + "/view/" + str.lower(controller), 0755)
        file = io.open(fileName, "wb")
        fileContent = viewTemplate.replace('[[controller]]', controller)
        file.write(fileContent.replace('[[name]]', name))
        file.close()
    except:
        print "ERROR:", sys.exc_info()
        sys.exit()
        
    addTemplate(name, controller)
    
    
    

def addTemplate(name, controller):

    print "Trying to add template", name, "to", controller
    templateTemplate = abfunctions.getTemplate('template')
    fileName = os.path.abspath(os.getcwd() + "/template/" + str.lower(controller) + "/" + str.lower(name) + ".html")
    
    try:
        if os.path.isdir(os.getcwd() + "/template/" + str.lower(controller)) == False:
            os.mkdir(os.getcwd() + "/template/" + str.lower(controller), 0755)
        file = io.open(fileName, "wb")
        fileContent = templateTemplate.replace('[[controller]]', controller)
        file.write(fileContent.replace('[[name]]', name))
        file.close()
    except:
        print "ERROR:", sys.exc_info()
        sys.exit()