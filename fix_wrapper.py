import re
with open('src/index.css', 'r') as f:
    content = f.read()

# Fix wrapper
content = re.sub(r'\.footer-modern-wrapper \{[^}]*\}', '''.footer-modern-wrapper {
  padding: 80px 20px 60px;
  font-family: var(--body);
}''', content, count=1)

# Fix newsletter p
content = re.sub(r'\.fm-newsletter p \{color: rgba\(255,255,255,0\.9\);\s*color: var\(--panel-text-soft\);\s*font-size: 15px;', r'.fm-newsletter p {\n  color: rgba(255,255,255,0.9);\n  font-size: 15px;', content)

with open('src/index.css', 'w') as f:
    f.write(content)
