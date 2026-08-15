import re

with open('src/index.css', 'r') as f:
    content = f.read()

# .footer-modern -> green background, white text
content = re.sub(r'\.footer-modern \{([^}]*?)(background: [^;]+;)([^}]*?)(color: [^;]+;)([^}]*)\}', r'.footer-modern {\1background: var(--green);\3color: #ffffff;\5}', content)

# .fm-brand-col .logo -> white text
content = re.sub(r'\.fm-brand-col \.logo \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-brand-col .logo {\1color: #ffffff;\3}', content)
# .fm-brand-col p -> rgba(255,255,255,0.8)
content = re.sub(r'\.fm-brand-col p \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-brand-col p {\1color: rgba(255,255,255,0.8);\3}', content)

# .fm-social a -> white text, light white background
content = re.sub(r'\.fm-social a \{([^}]*?)(background: [^;]+;)([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-social a {\1background: rgba(255,255,255,0.1);\3color: #ffffff;\5}', content)
# .fm-social a:hover -> white background, green text
content = re.sub(r'\.fm-social a:hover \{([^}]*?)(background: [^;]+;)([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-social a:hover {\1background: #ffffff;\3color: var(--green);\5}', content)

# .fm-col h4 -> white text
content = re.sub(r'\.fm-col h4 \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-col h4 {\1color: #ffffff;\3}', content)
# .fm-col a -> rgba(255,255,255,0.8)
content = re.sub(r'\.fm-col a \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-col a {\1color: rgba(255,255,255,0.8);\3}', content)
# .fm-col a:hover -> white text
content = re.sub(r'\.fm-col a:hover \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-col a:hover {\1color: #ffffff;\3}', content)

# .fm-contact p -> rgba(255,255,255,0.6)
content = re.sub(r'\.fm-contact p \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-contact p {\1color: rgba(255,255,255,0.6);\3}', content)
# .fm-contact a -> rgba(255,255,255,0.8)
content = re.sub(r'\.fm-contact a \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-contact a {\1color: rgba(255,255,255,0.8);\3}', content)
# .fm-contact a:hover -> white text
content = re.sub(r'\.fm-contact a:hover \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-contact a:hover {\1color: #ffffff;\3}', content)

# .fm-bottom -> rgba(255,255,255,0.7)
content = re.sub(r'\.fm-bottom \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-bottom {\1color: rgba(255,255,255,0.7);\3}', content)
# .fm-legal-links a -> rgba(255,255,255,0.7)
content = re.sub(r'\.fm-legal-links a \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-legal-links a {\1color: rgba(255,255,255,0.7);\3}', content)
# .fm-legal-links a:hover -> white text
content = re.sub(r'\.fm-legal-links a:hover \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-legal-links a:hover {\1color: #ffffff;\3}', content)

# .fm-disclaimer -> background rgba(255,255,255,0.05), border rgba(255,255,255,0.08), color rgba(255,255,255,0.8)
content = re.sub(r'\.fm-disclaimer \{([^}]*?)(background: [^;]+;)([^}]*?)(border: [^;]+;)([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-disclaimer {\1background: rgba(255,255,255,0.05);\3border: 1px solid rgba(255,255,255,0.08);\5color: rgba(255,255,255,0.8);\7}', content)
# .fm-disclaimer-header -> color white
content = re.sub(r'\.fm-disclaimer-header \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-disclaimer-header {\1color: #ffffff;\3}', content)
# .fm-disclaimer p -> rgba(255,255,255,0.7)
content = re.sub(r'\.fm-disclaimer p \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-disclaimer p {\1color: rgba(255,255,255,0.7);\3}', content)

# Newsletter -> background gold
content = re.sub(r'\.fm-newsletter \{([^}]*?)(background: [^;]+;)([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-newsletter {\1background: var(--gold);\3color: var(--on-gold);\5}', content)
# Newsletter h3 -> var(--on-gold)
content = re.sub(r'\.fm-newsletter h3 \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-newsletter h3 {\1color: var(--on-gold);\3}', content)
# Newsletter p -> rgba(23,23,23,0.8)
content = re.sub(r'\.fm-newsletter p \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-newsletter p {\1color: rgba(23,23,23,0.8);\3}', content)

# Newsletter input colors
content = re.sub(r'\.fm-newsletter-form input \{([^}]*?)(background: [^;]+;)([^}]*?)(border: [^;]+;)([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-newsletter-form input {\1background: rgba(23,23,23,0.05);\3border: 1px solid rgba(23,23,23,0.1);\5color: var(--ink);\7}', content)
content = re.sub(r'\.fm-newsletter-form input::placeholder \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-newsletter-form input::placeholder {\1color: rgba(23,23,23,0.5);\3}', content)
content = re.sub(r'\.fm-newsletter-form input:focus \{([^}]*?)(border-color: [^;]+;)([^}]*?)(background: [^;]+;)([^}]*)\}', r'.fm-newsletter-form input:focus {\1border-color: rgba(23,23,23,0.3);\3background: rgba(23,23,23,0.08);\5}', content)
content = re.sub(r'\.fm-input-icon \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-input-icon {\1color: rgba(23,23,23,0.5);\3}', content)
content = re.sub(r'\.fm-watermark \{([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-watermark {\1color: rgba(23,23,23,0.03);\3}', content)

# Newsletter form button -> green background, white text
content = re.sub(r'\.fm-newsletter-form button \{([^}]*?)(background: [^;]+;)([^}]*?)(color: [^;]+;)([^}]*)\}', r'.fm-newsletter-form button {\1background: var(--green);\3color: #ffffff;\5}', content)
content = re.sub(r'\.fm-newsletter-form button:hover \{([^}]*?)(background: [^;]+;)([^}]*)\}', r'.fm-newsletter-form button:hover {\1background: var(--green-deep);\3}', content)

with open('src/index.css', 'w') as f:
    f.write(content)

