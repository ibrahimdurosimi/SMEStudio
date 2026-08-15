import re

with open('src/index.css', 'r') as f:
    content = f.read()

content = re.sub(r'\.fm-newsletter \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-newsletter {\1color: var(--panel-text);\3}', content)
content = re.sub(r'\.fm-newsletter p \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-newsletter p {\1color: var(--panel-text-soft);\3}', content)

with open('src/index.css', 'w') as f:
    f.write(content)
