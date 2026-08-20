# 스타일몰 데이터셋 생성 (케이스 C — 패션 커머스형)

가상의 온라인 패션 편집숍 "스타일몰"의 데이터셋을 완전한 JSON으로
`data/data.json`에 저장하라. 전부 허구 샘플. 브랜드명은 전부 창작(실존 브랜드
금지). 톤은 패션 커머스 특유의 간결한 제품 카피 + 실사용 후기의 구어체.

최상위 구조:

```json
{
  "service": {"name": "스타일몰", "tagline": "오늘의 스타일, 지금 배송",
    "disclosure": "모든 상품·브랜드·후기는 데모용 허구 샘플입니다."},
  "brands": [...12개...],
  "categories": [...6개...],
  "products": [...28개...],
  "reviews": [...84건 내외...],
  "lookbooks": [...3개...],
  "curations": [...2개...]
}
```

1. `brands` 12개: {"id":"br-01","name":"창작 브랜드명(한/영 혼합 감성)",
   "origin":"국내|해외","follower_count":1200~89000,"one_liner":"브랜드 한 줄 소개"}
2. `categories` 6종: 상의, 하의, 아우터, 신발, 가방, 액세서리.
3. `products` 28개:
   {"id":"sp-01","name":"상품명(핏·소재 언급형)","brand_id","category_id",
    "gender":"men|women|unisex",
    "price": 정가 원 단위,"sale_price": 세일가 또는 null(세일 상품 12개 내외,
    할인율 10~40%),"images":["assets/sp-01-model.jpg","assets/sp-01-flat.jpg"]
    (전 상품 모델컷+제품컷 2컷),"rating":3.8~4.9 소수점 1자리,"review_count":
    reviews 배열의 실제 건수와 일치,"like_count":50~4200,
    "ranking": 1~28 고유값(전체 랭킹),"tags":["빅사이즈","봄신상" 등 0~3개],
    "sizes":["S","M","L"] 등 카테고리에 맞게,
    "short_copy":"한 줄 제품 카피(15자 내외)"}
4. `reviews` 84건 내외 (상품당 2~4건):
   {"id":"srv-001","product_id","rating":1~5(4·5 위주),"body":"2~3문장 —
    핏/사이즈/재질/배송 언급, 구매 사이즈와 평소 사이즈 비교 포함",
    "author_nick","height_cm":155~185,"weight_hint":"슬림|보통|통통" 중,
    "purchased_size":"M" 등,"helpful":0~90,"ago":"3일 전|2주 전|1달 전"}
5. `lookbooks` 3개: {"id":"lb-1","title":"룩북 제목(시즌/무드)","subtitle",
   "cover_image":"assets/lb-1-cover.jpg",
   "cuts":["assets/lb-1-c1.jpg","assets/lb-1-c2.jpg","assets/lb-1-c3.jpg"],
   "product_ids":[등장 상품 4~6개]}
6. `curations` 2개: {"id":"sc-1","title":"기획전 제목","subtitle",
   "banner_image":"assets/sc-1.jpg","product_ids":[4~6개],"ends_in_days":3~14}

관계 무결성: 모든 *_id 참조 존재, review_count = 실제 리뷰 수, ranking 고유,
세일가 < 정가. 브랜드당 상품 1~4개 분포.

완료 후 '저장완료'라고만 답하라. 파일 외 다른 출력 금지.
