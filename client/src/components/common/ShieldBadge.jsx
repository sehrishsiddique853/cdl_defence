import "../../style/ShieldBadge.css";

export default function ShieldBadge() {
  return (
    <div className="shield-badge">
      <img
        src="/images/shield.png"
        alt="CDL Defense royal crest"
        className="shield-badge-image"
        width="1122"
        height="1402"
        fetchPriority="high"
        decoding="async"
      />

      <img
        src="/images/star.png"
        alt=""
        className="shield-badge-star"
        aria-hidden="true"
      />
    </div>
  );
}
