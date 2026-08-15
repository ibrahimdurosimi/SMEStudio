import re
with open('index.html', 'r') as f:
    content = f.read()

content = content.replace('family=Fraunces:opsz,wght@9..144,900&family=IBM+Plex+Mono:wght@400;500;600&family=Manrope:wght@400;500;600;700', 'family=Playfair+Display:wght@400;600;700;900&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700')

with open('index.html', 'w') as f:
    f.write(content)
