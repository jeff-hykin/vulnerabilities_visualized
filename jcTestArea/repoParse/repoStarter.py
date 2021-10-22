import shlex, subprocess, sys
#multiprocessing id keep track and pid checker
#subprocess begin
#call RepoScraper for def

f = open('repos.txt', 'r+')
repoList =f.read().split('\n')
itr = 0
for q in repoList:
  #os.system(cmd)
  if (len(q) > 0 and q != '\n'):
    result = subprocess.Popen(['python3',  'repoManager.py' ,str(q), str(itr)])
    #result = subprocess.run(['python3',  'repoManager.py' ,str(q), str(itr)], capture_output=True, text=True)
    print(result)
    itr+=1
f.close()