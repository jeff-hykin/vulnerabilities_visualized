import shlex, subprocess, sys

# multiprocessing id keep track and pid checker
# subprocess begin
# call RepoScraper for def

file = open("repos.txt", "r+")
repo_list = file.read().split("\n")
index = 0
for line in repo_list:
    # os.system(cmd)
    if len(line) > 0 and line != "\n":
        result = subprocess.Popen(["python3", "repo_manager.py", str(line), str(index)])
        # result = subprocess.run(['python3',  'repo_manager.py' ,str(q), str(index)], capture_output=True, text=True)
        print(result)
        index += 1
file.close()