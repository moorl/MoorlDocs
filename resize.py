from PIL import Image
import os, sys
import glob
import pathlib

root_dir = "./docs-html/"

for filename in glob.iglob(root_dir + '**/images/*.*', recursive=True):
    name = pathlib.Path(filename).name
    extension = pathlib.Path(filename).suffix
    if name == 'favicon.png' or name == 'illustration.png':
        continue
    print(filename)
    newFilename = pathlib.Path(filename).with_suffix('.jpg')
    im = Image.open(filename)
    im = im.convert('RGB')
    im.save(newFilename , 'JPEG', quality=100)

    os.rename(filename, filename.lower())

    if extension == 'png':
        os.remove(filename)
