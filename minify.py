import os, sys
import glob
import pathlib
import htmlmin

root_dir = "./docs-html/"

for filename in glob.iglob(root_dir + '**/*.html', recursive=True):
    print(filename)
    file = open(filename, 'r')
    content = file.read()
    content = htmlmin.minify(content,remove_empty_space=True)
    file.close()
    file = open(filename, 'w')
    file.write(content)
    file.close()
