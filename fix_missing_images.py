import re
import glob

replacements = {
    "1569966141443-44754593cecc": "1531123414780-f74242c2b052",
    "1544717684-2c6c06df1621": "1522529599102-193c0d76b5b6",
    "1507679622256-4ed7140228d7": "1573164574572-cb89e39749b4",
    "1531123897727-8f129e1bf98c": "1573164713988-8665fc963095"
}

files = glob.glob('src/**/*.tsx', recursive=True)
for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    for old_id, new_id in replacements.items():
        content = content.replace(old_id, new_id)
        
    with open(file, 'w') as f:
        f.write(content)
