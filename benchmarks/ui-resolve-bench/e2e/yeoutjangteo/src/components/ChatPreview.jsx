export function ChatPreview({ chat }) {
  if (!chat) {
    return (
      <p className="listing-meta">이 매물에는 아직 공개된 문의 대화가 없습니다.</p>
    );
  }
  return (
    <div className="chat-list" data-state="default">
      {chat.messages.map((message, index) => (
        <div key={`${chat.id}-${index}`} className="bubble" data-from={message.from}>
          <span>{message.text}</span>
          <time>{message.ago}</time>
        </div>
      ))}
    </div>
  );
}

export function InquiryUnavailable() {
  return (
    <div className="unavailable" data-state="unavailable">
      <p role="status">
        문의 보내기는 준비 중입니다.
      </p>
      <p>
        <button type="button" className="quiet-button" data-cta="local" disabled data-state="disabled">
          문의 보내기
        </button>
      </p>
    </div>
  );
}
