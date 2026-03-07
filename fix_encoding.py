import re

path = r'c:\Users\matia\model_safe\Winvest sivut\winvest\tapahtumat.html'
data = open(path, 'r', encoding='utf-8-sig').read()

# Fix mojibake: double-encoded UTF-8 patterns
# These occur when UTF-8 bytes are re-interpreted as cp1252/latin1 then re-encoded as UTF-8
replacements = [
    ('Ã¤', 'ä'),
    ('Ã¶', 'ö'),
    ('Ã¥', 'å'),
    ('Ã\u0084', 'Ä'),
    ('Ã\u0096', 'Ö'),
    ('Ã\u0085', 'Å'),
    ('Ã©', 'é'),
    ('Ã¼', 'ü'),
    ('Ã\u00bc', 'ü'),
    ('\u00e2\u0080\u0093', '–'),  # en dash
    ('\u00e2\u0080\u0094', '—'),  # em dash
    ('\u00e2\u0080\u0099', '\u2019'),  # right single quote
    ('\u00e2\u0080\u009c', '\u201c'),  # left double quote
    ('\u00e2\u0080\u009d', '\u201d'),  # right double quote
    ('\u00e2\u0080\u0098', '\u2018'),  # left single quote
]

count = 0
for old, new in replacements:
    if old in data:
        c = data.count(old)
        data = data.replace(old, new)
        count += c
        print(f'Replaced {repr(old)} -> {repr(new)} ({c}x)')

open(path, 'w', encoding='utf-8', newline='\n').write(data)
print(f'Done. Total replacements: {count}')
