import os
import shlex
import subprocess
import sys

name_list = sys.argv[1].split("/")
for q in name_list:
    if ".git" in q:
        name = q.split(".")[0]

text_file_name = name + ".txt"

report_file = open(text_file_name, "w")

cmds = [
    ["git", "clone", "https://github.com/" + str(sys.argv[1])],
    ["touch", text_file_name ],
    ["git", "log"],
    ["rm", "-rf", name],
    ["mv", text_file_name, "output_files/"],
]
work_dir = os.getcwd()
w_dirs = [work_dir, work_dir, work_dir + "/" + name, work_dir, work_dir]
w_out = [None, None, report_file, None, None]
for q in range(0, len(cmds)):
    subprocess.run(cmds[q], cwd=w_dirs[q], stdout=w_out[q])

report_file.close()
