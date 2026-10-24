type Listing = { id: string; title: string; note: string };

// sellers' own titles and notes: sample records, not the product's copy
export const LISTINGS: readonly Listing[] = [
  { id: "a", title: "바구니 달린 자전거 팝니다", note: "직거래만 됩니다" },
  { id: "b", title: "원목 의자 나눔합니다", note: "상태 좋아요" },
];

export const EMPTY_TITLE = "아직 올라온 글이 없어요";
export const EMPTY_BODY = "검색어를 바꿔 보세요";
