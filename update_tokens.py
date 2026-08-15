import re

with open('src/index.css', 'r') as f:
    content = f.read()

root_new = '''@import "tailwindcss";

:root {
  --paper: #FFFFFF;
  --paper-deep: #F2F2F1;
  --surface: #FFFFFF;
  --ink: #131313;
  --ink-soft: #57575A;
  --ink-faint: #8A8A8A;
  --gold: #F6A800;
  --gold-deep: #B8790A;
  --gold-light: #FCEDC7;
  --gold-glow: rgba(246, 168, 0, 0.28);
  --green: #0B7D53;
  --green-deep: #085F40;
  --green-light: #DFF3EA;
  --green-glow: rgba(11, 125, 83, 0.22);
  --panel: #121212;
  --panel-soft: #1E1E1E;
  --panel-text: #FAFAFA;
  --panel-text-soft: #C4C4C4;
  --panel-text-faint: #8F8F8F;
  --on-gold: #171717;
  --line: rgba(15,15,15,0.10);
  --line-strong: rgba(15,15,15,0.18);
  --radius: 18px;
  --radius-lg: 26px;
  --display: 'Playfair Display', serif;
  --body: 'Plus Jakarta Sans', sans-serif;
  --mono: 'JetBrains Mono', monospace;
  --maxw: 1200px;
  --ease: cubic-bezier(.2,.8,.2,1);
}

html[data-theme="dark"] {
  --paper: #121212;
  --paper-deep: #191919;
  --surface: #1D1D1D;
  --ink: #F5F5F5;
  --ink-soft: #C4C4C4;
  --ink-faint: #8F8F8F;
  --gold: #FFC93C;
  --gold-deep: #FFD873;
  --gold-light: #4A3410;
  --gold-glow: rgba(255, 201, 60, 0.28);
  --green: #24CE8D;
  --green-deep: #6FE6B8;
  --green-light: #123D2B;
  --green-glow: rgba(36, 206, 141, 0.22);
  --panel: #1C1C1C;
  --panel-soft: #262626;
  --panel-text: #F5F5F5;
  --panel-text-soft: #C4C4C4;
  --panel-text-faint: #8F8F8F;
  --on-gold: #171717;
  --line: rgba(250,250,250,0.10);
  --line-strong: rgba(250,250,250,0.18);
}'''

content = re.sub(r'@import "tailwindcss";\s*:root\{[\s\S]*?html\[data-theme="dark"\]\{[\s\S]*?\}', root_new, content)

# I should also replace any raw var(--red) usages with var(--green) or remove them.
content = content.replace('var(--red)', 'var(--green)')
content = content.replace('var(--red-deep)', 'var(--green-deep)')
content = content.replace('var(--red-light)', 'var(--green-light)')
content = content.replace('var(--red-glow)', 'var(--green-glow)')

with open('src/index.css', 'w') as f:
    f.write(content)
