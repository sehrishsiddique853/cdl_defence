import { useState } from "react";
import "../../style/AnimatedShield.css";

const DEPTH_LAYERS = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];

export default function AnimatedShield() {
  const [assetsReady, setAssetsReady] = useState(true);

  if (!assetsReady) {
    return (
      <img
        src="/images/logo-optimized.png"
        alt="CDL Defense royal crest"
        className="animated-shield-fallback"
        width="480"
        height="610"
        fetchPriority="high"
        decoding="async"
      />
    );
  }

  return (
    <div className="animated-shield">
      <img
        src="/images/shield.png"
        alt="Your Partner in CDL Protection"
        className="animated-shield-base"
        width="1122"
        height="1402"
        fetchPriority="high"
        decoding="async"
        onError={() => setAssetsReady(false)}
      />

      <div className="animated-shield-star-slot" aria-hidden="true">
        <div className="animated-shield-star-rotor">
          {DEPTH_LAYERS.map((depth) => {
            const light = 0.68 + ((depth + 6) / 12) * 0.37;

            return (
              <img
                key={depth}
                src="/images/star.png"
                alt=""
                className="animated-shield-star-layer"
                style={{
                  transform: `translateZ(${depth}px)`,
                  filter: `brightness(${light}) saturate(1.04)`,
                }}
                onError={() => setAssetsReady(false)}
              />
            );
          })}

          <span className="animated-shield-star-shine" />
        </div>
      </div>
    </div>
  );
}
