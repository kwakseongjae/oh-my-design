#!/usr/bin/env python3
"""이웃장터 assets-spec 빌더 — data/data.json 생성 후 실행.

중고거래 매물 사진 무드: 집 안에서 자연광/실내등으로 찍은 실물 사진 느낌.
매물당 2컷(a: 전체 정면, b: 디테일·다른 각도). 사람·읽히는 텍스트 금지.
"""
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
data = json.load(open(os.path.join(HERE, 'data', 'data.json')))
cats = {c['id']: c['name'] for c in data['categories']}

STYLE = ("realistic casual phone photo taken indoors at home, natural window light "
         "or warm room light, slightly imperfect framing like a real secondhand "
         "marketplace listing, no people, no readable text")

items = []
for l in data['listings']:
    cat = cats.get(l['category_id'], '')
    cond = l.get('condition', '')
    base = (f"Used item for a Korean secondhand marketplace listing titled "
            f"\"{l['title']}\" (category: {cat}, condition: {cond})")
    items.append({
        'file': f"{l['id']}-a.jpg",
        'prompt': f"{base}: the whole item photographed straight-on in a Korean home, on the floor or against a wall as typically staged for a listing",
        'style': STYLE,
    })
    items.append({
        'file': f"{l['id']}-b.jpg",
        'prompt': f"{base}: a closer second angle showing surface detail and actual condition of the item",
        'style': STYLE,
    })

spec = {'task_id': 'yeoutjangteo-v1', 'items': items}
out = os.path.join(HERE, 'assets-spec.json')
json.dump(spec, open(out, 'w'), ensure_ascii=False, indent=1)
print(f"{out}: {len(items)} items")

# 무결성: data가 참조하는 파일명과 스펙 파일명 일치 확인
import re
refs = set(re.findall(r'assets/([\w.-]+\.jpg)', json.dumps(data)))
have = set(i['file'] for i in items)
missing = refs - have
extra = have - refs
if missing or extra:
    print('MISSING (data가 참조하나 스펙에 없음):', sorted(missing))
    print('EXTRA (스펙에 있으나 data 미참조):', sorted(extra))
    sys.exit(1)
print('spec ↔ data references consistent')
