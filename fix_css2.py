with open('src/index.css', 'r') as f:
    content = f.read()

content = content.replace('position: relative;\n  margin- margin-bottom: 60px;', 'position: absolute;')

with open('src/index.css', 'w') as f:
    f.write(content)
