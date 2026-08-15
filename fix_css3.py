import re
with open('src/index.css', 'r') as f:
    content = f.read()

content = re.sub(r'margin-\s*margin-bottom: 60px;', '', content)
content = content.replace('position: relative;\n  \n', 'position: absolute;')

with open('src/index.css', 'w') as f:
    f.write(content)
