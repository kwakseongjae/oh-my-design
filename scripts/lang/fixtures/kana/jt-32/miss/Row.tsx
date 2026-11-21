export function Row() {
  return (
    <div>
      <p className="truncate">長い日本語のタイトルが入ります</p>
      <p className="text-ellipsis overflow-hidden whitespace-nowrap">長い日本語のタイトル</p>
      <p className="line-clamp-2 text-ellipsis">長い日本語の説明文が二行で切れます</p>
    </div>
  );
}
