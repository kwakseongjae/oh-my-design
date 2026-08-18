# 데이터셋 확장 (onzip v2)

`data/data.json`을 읽고, 아래를 추가한 완전한 JSON을 `data/data.v2.json`으로 저장하라.
기존 필드·레코드는 바이트 그대로 유지하고 추가만 한다. 모든 신규 텍스트는 자연스러운
한국어 구어/제품 문체. 전부 허구 샘플.

1. 각 product에 추가:
   - "images": [기존 image, "assets/<id>-life.jpg", "assets/<id>-detail.jpg"]
     (기존 "image" 필드는 유지; id는 prod-01 형식 그대로)
   - "spec": {"소재": "...", "크기": "...", "색상": "...", "구성": "..."} (상품에 맞게)
   - "short_pitch": 한 줄 매력 문구 (15자 내외)
2. 최상위 "reviews" 배열: 각 상품당 3~5건, 총 90건 내외.
   {"id":"rv-###","product_id":"prod-##","rating":1~5(4·5 위주, 3 낮은 것도 소수),
    "title":"한 줄 제목","body":"2~3문장 실사용 후기(설치·배송·질감·공간 느낌 등 구체적으로)",
    "author_nick":"한국어 닉네임","helpful":0~140,"ago":"3일 전|2주 전|1달 전|3달 전 중"}
3. 각 post에 추가:
   - "gallery": [기존 cover_image, "assets/<post-id>-g1.jpg", "assets/<post-id>-g2.jpg", "assets/<post-id>-g3.jpg"]
   - "body_blocks": 3~4개의 문단 배열 (각 2~3문장, 집 소개→고른 이유→배치 팁→마무리 흐름)
4. 최상위 "curations" 배열 2건: {"id":"cur-1|2","title":"기획전 제목","subtitle":"부제",
   "banner_image":"assets/cur-1.jpg","product_ids":[관련 상품 4~6개]}

완료 후 '저장완료'라고만 답하라. 파일 외 다른 출력 금지.
