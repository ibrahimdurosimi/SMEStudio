import re

with open('src/index.css', 'r') as f:
    content = f.read()

# Fix the fm-newsletter padding and margin issues manually in Python
content = re.sub(r'\.footer-modern \{[^}]*\}', '''.footer-modern {
  max-width: 1200px;
  margin: 0 auto;
  background: #fcf9f2;
  border-radius: 32px;
  position: relative;
  padding: 0px 60px 50px;
  color: #1a1528;
  box-shadow: 0 40px 100px rgba(0,0,0,0.2);
}''', content, count=1)

content = re.sub(r'@media \(max-width: 768px\) \{\s*\.footer-modern \{[^}]*\}\s*\}', '''@media (max-width: 768px) {
  .footer-modern {
    padding: 0px 30px 40px;
    border-radius: 24px;
  }
}''', content, count=1)

content = re.sub(r'\.fm-newsletter \{[^}]*\}', '''.fm-newsletter {
  position: relative;
  margin-top: -70px;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #241249, #351c6b);
  border-radius: 24px;
  padding: 45px 50px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 24px 50px rgba(0,0,0,0.3);
  overflow: hidden;
  width: 100%;
}''', content, count=1)

with open('src/index.css', 'w') as f:
    f.write(content)
