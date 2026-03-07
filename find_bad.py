path = r'c:\Users\matia\model_safe\Winvest sivut\winvest\tapahtumat.html'
data = open(path, 'r', encoding='utf-8').read()

good = set('äöåÄÖÅéü–—')
found = []
for i, ch in enumerate(data):
    if ord(ch) > 127 and ch not in good:
        context = data[max(0,i-10):i+10]
        found.append(f'Pos {i}: U+{ord(ch):04X} {repr(ch)} context: {repr(context)}')

for line in found[:30]:
    print(line)
print(f'Total: {len(found)}')
