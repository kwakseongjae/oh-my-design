import { useEffect, useId, useState } from "react";
import { asset } from "../lib/catalog.js";

const CUT_LABELS = ["정면", "자리에 둔 모습", "자세히"];

export default function Gallery({ images, name }) {
  const groupId = useId();
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("loading");
  const cuts = (images || []).slice(0, 3);

  useEffect(() => {
    setPhase("loading");
  }, [index]);

  if (!cuts.length) return null;
  const current = cuts[index] || cuts[0];

  return (
    <div className="gallery" data-state={phase}>
      <div className="stage-wrap">
        <img
          className="stage"
          src={asset(current)}
          alt={`${name} ${CUT_LABELS[index] || "사진"}`}
          width="1200"
          height="900"
          onLoad={() => setPhase("success")}
          onError={() => setPhase("error")}
        />
      </div>
      <div className="thumbs" role="radiogroup" aria-label="상품 사진">
        {cuts.map((src, cutIndex) => (
          <button
            key={src}
            type="button"
            className="thumb"
            role="radio"
            aria-checked={cutIndex === index}
            aria-label={CUT_LABELS[cutIndex]}
            id={`${groupId}-${cutIndex}`}
            onClick={() => setIndex(cutIndex)}
          >
            <img src={asset(src)} alt="" width="320" height="240" />
          </button>
        ))}
      </div>
      <p className="live-line" role="status">
        {phase === "loading" ? `${CUT_LABELS[index]} 사진을 불러오는 중입니다.` : null}
        {phase === "error" ? `${CUT_LABELS[index]} 사진을 불러오지 못했습니다.` : null}
        {phase === "success" ? `${CUT_LABELS[index]} 사진을 보고 있습니다.` : null}
      </p>
    </div>
  );
}
