import io
import os
import sys
import abfunctions
import distutils.dir_util

abDir = os.getenv('ABSTRACT_BONE_DIR', False)

# Function definitions for the different create methods ------------
# @todo: Add some validation to make sure we can't add junky file names
def addRouter(name):
    
    print "Trying to add router", name
    routerTemplate = abfunctions.getTemplate('router')
    fileName = os.path.abspath(os.getcwd() + "/scripts/router/" + str.lower(name) + ".js")
    
    try:
        file = io.open(fileName, "wb")
        file.write(routerTemplate.replace('[[name]]', name))
        file.close()
    except:
        print "ERROR:", sys.exc_info()
        sys.exit()
        
    addView(name, name)
    addTemplate(name, name)
        
        
        
      
def addView(name, router):

    print "Trying to add view", name, "to", router
    viewTemplate = abfunctions.getTemplate('view')
    fileName = os.path.abspath(os.getcwd() + "/scripts/view/" + str.lower(router) + "/view_" + str.lower(name) + ".js")
    
    try:
        if os.path.isdir(os.getcwd() + "/scripts/view/" + str.lower(router)) == False:
            os.mkdir(os.getcwd() + "/scripts/view/" + str.lower(router), 0755)
        file = io.open(fileName, "wb")
        fileContent = viewTemplate.replace('[[router]]', router)
        file.write(fileContent.replace('[[name]]', name))
        file.close()
    except:
        print "ERROR:", sys.exc_info()
        sys.exit()
    
    
    

def addTemplate(name, router):

    print "Trying to add template", name, "to", router
    templateTemplate = abfunctions.getTemplate('template')
    fileName = os.path.abspath(os.getcwd() + "/scripts/template/" + str.lower(router) + "/" + str.lower(name) + ".html")
    
    try:
        if os.path.isdir(os.getcwd() + "/scripts/template/" + str.lower(router)) == False:
            os.mkdir(os.getcwd() + "/scripts/template/" + str.lower(router), 0755)
        file = io.open(fileName, "wb")
        fileContent = templateTemplate.replace('[[router]]', router)
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
