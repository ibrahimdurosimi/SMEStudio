import re

with open('src/index.css', 'r') as f:
    content = f.read()

# Remove old footer-modern styles completely
content = re.sub(r'\.footer-modern \{[^}]*\}', '', content)
content = re.sub(r'@media \(max-width: 768px\) \{\s*\.footer-modern \{[^}]*\}\s*\}', '', content)
content = re.sub(r'\.fm-newsletter \{[\s\S]*?(?=\.fm-main)', '', content)

# Append new styles
new_styles = '''
.footer-modern {
  max-width: 1200px;
  margin: 0 auto;
  background: #fcf9f2;
  border-radius: 32px;
  position: relative;
  padding: 0px 60px 50px;
  color: #1a1528;
  box-shadow: 0 40px 100px rgba(0,0,0,0.2);
}

@media (max-width: 768px) {
  .footer-modern {
    padding: 0px 30px 40px;
    border-radius: 24px;
  }
}

.fm-newsletter {
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
}
@media (max-width: 900px) {
  .fm-newsletter {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
}
@media (max-width: 768px) {
  .fm-newsletter {
    margin-top: -80px;
    margin-bottom: 40px;
    padding: 30px 24px;
  }
}
.fm-newsletter-text {
  position: relative;
  z-index: 2;
  max-width: 480px;
}
.fm-newsletter h3 {
  font-family: var(--display);
  font-size: clamp(24px, 3vw, 36px);
  margin-bottom: 12px;
  line-height: 1.1;
  font-weight: 700;
}
.fm-newsletter p {
  color: rgba(255,255,255,0.8);
  font-size: 15px;
  line-height: 1.5;
}
.fm-newsletter-form {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 12px;
  width: 100%;
  max-width: 420px;
}
@media (max-width: 500px) {
  .fm-newsletter-form {
    flex-direction: column;
  }
}
.fm-newsletter-form input {
  width: 100%;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 30px;
  padding: 14px 20px 14px 48px;
  color: #fff;
  font-family: var(--body);
  font-size: 15px;
  outline: none;
  transition: all 0.3s ease;
}
.fm-newsletter-form input::placeholder {
  color: rgba(255,255,255,0.6);
}
.fm-newsletter-form input:focus {
  border-color: var(--gold);
  background: rgba(255,255,255,0.15);
}
.fm-input-icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255,255,255,0.6);
  pointer-events: none;
}
.fm-newsletter-form button {
  background: var(--gold);
  color: var(--ink);
  border: none;
  border-radius: 30px;
  padding: 0 30px;
  font-family: var(--mono);
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 50px;
}
.fm-newsletter-form button:hover {
  background: var(--gold-deep);
  transform: translateY(-2px);
}
.fm-watermark {
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--display);
  font-size: 180px;
  font-weight: 900;
  color: rgba(255,255,255,0.03);
  z-index: 1;
  pointer-events: none;
}
'''

content = content + '\n' + new_styles

with open('src/index.css', 'w') as f:
    f.write(content)

