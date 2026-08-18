#!/usr/bin/env python3
"""스타일몰 assets-spec 빌더 — data/data.json 생성 후 실행.

패션 커머스 무드. 모델컷은 얼굴이 프레임 밖(뒷모습/목 아래 크롭)으로 —
생성 인물 얼굴의 불쾌한 골짜기 리스크 회피. 제품컷은 플랫레이/고스트 마네킹.
읽히는 텍스트·로고 금지(창작 브랜드 세계관 유지).
"""
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
data = json.load(open(os.path.join(HERE, 'data', 'data.json')))
cats = {c['id']: c['name'] for c in data['categories']}
brands = {b['id']: b['name'] for b in data['brands']}

MODEL_STYLE = ("editorial fashion photography, model's face out of frame (cropped "
               "above shoulders or photographed from behind), clean studio or "
               "urban backdrop, natural pose, no readable text or logos")
FLAT_STYLE = ("clean product flat lay or ghost mannequin shot on neutral "
              "light-gray background, soft studio lighting, e-commerce product "
              "photography, no people, no readable text or logos")
LOOK_STYLE = ("editorial fashion lookbook photography, cinematic natural light, "
              "faces out of frame or turned away, styled full outfits, "
              "no readable text or logos")

items = []
for p in data['products']:
    cat = cats.get(p['category_id'], '')
    base = f"Fashion item \"{p['name']}\" ({cat}, {p.get('gender','unisex')})"
    items.append({
        'file': f"{p['id']}-model.jpg",
        'prompt': f"{base}: worn on a model, outfit-focused editorial shot emphasizing fit and silhouette",
        'style': MODEL_STYLE,
    })
    items.append({
        'file': f"{p['id']}-flat.jpg",
        'prompt': f"{base}: the product alone, showing color, fabric texture and construction",
        'style': FLAT_STYLE,
    })

for lb in data['lookbooks']:
    items.append({
        'file': f"{lb['id']}-cover.jpg",
        'prompt': f"Lookbook cover for \"{lb['title']}\" — {lb.get('subtitle','')}: hero editorial image setting the season mood",
        'style': LOOK_STYLE,
    })
    for n in (1, 2, 3):
        items.append({
            'file': f"{lb['id']}-c{n}.jpg",
            'prompt': f"Lookbook cut {n} for \"{lb['title']}\": a distinct styled outfit scene consistent with the same shoot",
            'style': LOOK_STYLE,
        })

for c in data['curations']:
    items.append({
        'file': f"{c['id']}.jpg",
        'prompt': f"Wide promotional banner image for fashion sale event \"{c['title']}\" — {c.get('subtitle','')}: fashion still life or styled scene, space-friendly composition for text overlay",
        'style': "editorial fashion still life, wide composition, muted premium palette, no people's faces, no readable text",
    })

spec = {'task_id': 'stylemall-v1', 'items': items}
out = os.path.join(HERE, 'assets-spec.json')
json.dump(spec, open(out, 'w'), ensure_ascii=False, indent=1)
print(f"{out}: {len(items)} items")

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
