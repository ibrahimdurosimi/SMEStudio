import re
with open('src/index.css', 'r') as f:
    content = f.read()

# Make sure footer is gold
content = re.sub(r'\.footer-modern \{[^}]*\}', '''.footer-modern {
  max-width: 1200px;
  margin: 0 auto;
  background: var(--gold);
  border-radius: 32px;
  position: relative;
  padding: 0px 60px 50px;
  color: var(--on-gold);
  box-shadow: 0 40px 100px rgba(0,0,0,0.2);
}''', content, count=1)

# Make sure newsletter is green
content = re.sub(r'\.fm-newsletter \{[^}]*\}', '''.fm-newsletter {
  position: relative;
  margin-top: -70px;
  margin-bottom: 60px;
  background: var(--green);
  border-radius: 24px;
  padding: 45px 50px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 24px 50px rgba(0,0,0,0.2);
  overflow: hidden;
  width: 100%;
}''', content, count=1)

# Newsletter text colors
content = re.sub(r'\.fm-newsletter h3 \{([^}]*?)(color: [^;]+;)?([^}]*)\}', r'.fm-newsletter h3 {\1color: #ffffff;\3}', content)
content = re.sub(r'\.fm-newsletter p \{([^}]*?)(color: [^;]+;)?([^}]*)\}', r'.fm-newsletter p {\1color: rgba(255,255,255,0.9);\3}', content)

with open('src/index.css', 'w') as f:
    f.write(content)
