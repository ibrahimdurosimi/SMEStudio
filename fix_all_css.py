import re
with open('src/index.css', 'r') as f:
    content = f.read()

content = content.replace('position: relative;\n  margin-top: -70px;\n  margin-bottom: 60px;', 'position: absolute;')

# the python fix script already fixed .fm-newsletter earlier, so it might have position: absolute now. Let's fix .fm-newsletter manually again.
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
