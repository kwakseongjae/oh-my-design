import { useEffect, useState } from "react";
import { assetUrl } from "../lib/catalog.js";

const FRAME_LABELS = ["스튜디오", "자리에 둔 모습", "디테일"];

export default function ImageGallery({ frames, productName }) {
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState("loading");
  const current = frames[index];

  useEffect(() => {
    setStatus("loading");
  }, [current]);

  return (
    <div className="gallery" data-state={status}>
      <div className="gallery-stage">
        <img
          key={current}
          src={assetUrl(current)}
          alt={`${productName} ${FRAME_LABELS[index] ?? "사진"}`}
          width={1152}
          height={864}
          ref={(node) => {
            if (node?.complete && node.naturalWidth > 0) setStatus("default");
          }}
          onLoad={() => setStatus("default")}
          onError={() => setStatus("error")}
        />
      </div>
      {status === "error" ? (
        <p className="error-panel" role="alert">
          이 사진을 불러오지 못했습니다.
        </p>
      ) : null}
      <div className="gallery-thumbs" role="radiogroup" aria-label="상품 사진">
        {frames.map((frame, frameIndex) => (
          <button
            key={frame}
            type="button"
            role="radio"
            aria-checked={frameIndex === index}
            aria-label={FRAME_LABELS[frameIndex]}
            onClick={() => setIndex(frameIndex)}
          >
            <img src={assetUrl(frame)} alt="" width={288} height={216} loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
