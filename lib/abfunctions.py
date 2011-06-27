import os
import io
import sys

libDir = os.path.join(os.getenv('ABSTRACT_BONE_DIR', False), 'lib')

def isAbstractBoneEnv():
    
    if (os.path.isdir(os.path.join(os.getcwd(), 'scripts', 'controller')) == False or
        os.path.isdir(os.path.join(os.getcwd(), 'scripts', 'view')) == False or
        os.path.isdir(os.path.join(os.getcwd(), 'scripts', 'template')) == False):
        return False
       
    return True




def getTemplate(templateName):
    
    try:
        inPath = os.path.join(libDir, 'templates', templateName + ".jsx")
        inPath = os.path.abspath(inPath)
        file = open(inPath, 'r')
    except:
        print "ERROR: Missing template", templateName, sys.exc_info()
        sys.exit()
        
    contents = file.readlines()
    file.close()
    return ''.join(contents)
        
    
        
    
    