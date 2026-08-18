# 이웃장터 데이터셋 생성 (케이스 B — 로컬 중고거래형)

가상의 동네 중고거래 서비스 "이웃장터"의 데이터셋을 완전한 JSON으로
`data/data.json`에 저장하라. 전부 허구 샘플. 모든 텍스트는 자연스러운 한국어
구어체 — 중고거래 특유의 직거래 말투(단답, 상태 서술, 네고 언급)를 살린다.
실존 서비스명·브랜드명·상표 용어(예: 매너온도)는 쓰지 않는다.

최상위 구조:

```json
{
  "service": {"name": "이웃장터", "tagline": "우리 동네 직거래 장터",
    "disclosure": "모든 매물·판매자·대화는 데모용 허구 샘플입니다."},
  "neighborhoods": [...6개...],
  "categories": [...8개...],
  "listings": [...30개...],
  "sellers": [...12명...],
  "chats": [...8건...]
}
```

1. `neighborhoods`: {"id":"nb-1","name":"연남동"} 형식 6개 — 실제 서울 동 이름
   사용 가능(공공 지명), 걷기 좋은 동네 위주.
2. `categories`: {"id":"cat-furniture","name":"가구/인테리어","icon_hint":"의자"}
   8종 — 가구/인테리어, 디지털기기, 생활가전, 유아동, 의류, 도서, 스포츠, 취미.
3. `listings` 30개:
   {"id":"item-01","title":"매물 제목(중고 특유: 상태·사용기간 언급)",
    "price": 원 단위 정수(0 = 나눔; 나눔 2~3건 포함),
    "category_id","neighborhood_id","seller_id",
    "status":"selling|reserved|sold" (selling 20, reserved 5, sold 5),
    "condition":"새상품급|사용감 적음|사용감 있음",
    "description":"2~4문장. 구매 시기, 사용 빈도, 하자 여부, 직거래 위치 힌트",
    "images":["assets/item-01-a.jpg","assets/item-01-b.jpg"] (전 매물 2컷),
    "created_ago":"5분 전|1시간 전|3시간 전|어제|2일 전|1주 전" 중 분포,
    "chat_count":0~12,"like_count":0~35,"view_count":10~400}
   — 카테고리 전 종에 분포시키되 가구/디지털에 무게. 가격대는 5천원~45만원 현실적으로.
4. `sellers` 12명:
   {"id":"sel-01","nickname":"한국어 닉네임","neighborhood_id",
    "trust_score":36.5 기준 위아래 소수점 1자리(30.2~42.8 분포, 필드명은 trust_score),
    "trust_label":"따뜻함|보통|새싹" 매핑,"deal_count":1~120,
    "joined_ago":"1달 전|6달 전|1년 전|3년 전",
    "badges":["시간약속을 잘 지켜요","응답이 빨라요","친절해요"] 중 0~2개}
5. `chats` 8건 (상세 화면의 문의 미리보기용):
   {"id":"ch-1","listing_id","messages":[{"from":"buyer|seller","text":"네고 문의,
    직거래 시간 조율 등 실제 같은 짧은 대화","ago":"10분 전"} × 3~5]}

관계 무결성: 모든 *_id 참조는 존재해야 한다. listing↔seller↔neighborhood 일관성
(판매자의 동네와 매물 동네 일치). sold 매물에도 데이터는 완전히.

완료 후 '저장완료'라고만 답하라. 파일 외 다른 출력 금지.
