# repoManager.py
import os
import shlex
import subprocess
import sys
# arg0 = self, arg1 = gitRepo, arg2 = repoNum
# content :

nameList = sys.argv[1].split('/')
for q in nameList:
    if ('.git' in q):
        name = q.split('.')[0]

#nametxt = str(sys.argv[2])
nametxt = name

reportFile = open(nametxt + ".txt", "w")

cmds = [['git', 'clone', 'https://github.com/' + str(sys.argv[1])],
        ['touch', nametxt+'.txt'],
        ['git', 'log'],
        ['rm', '-rf', name],
        ['mv',nametxt + ".txt",'outputFiles/']]
workDir = os.getcwd()
wDirs = [workDir,
         workDir,
         workDir + '/' + name,
         workDir,
         workDir]
wOut = [None,
        None,
        reportFile,
        None,
        None]
for q in range(0, len(cmds)):
    subprocess.run(cmds[q], cwd=wDirs[q], stdout=wOut[q])

reportFile.close()
