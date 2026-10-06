
import { useEffect, useRef, useState } from "react";
import "../../style/ShieldWordmarkArrival.css";

const WORDMARK = "/images/cdl_defense_logo_no_star.png";
const STAR = "/images/star.png";

export default function ShieldWordmarkArrival({
  active,
  animate,
}) {
  const targetRef = useRef(null);

  const [settled, setSettled] = useState(!animate);
  const [spark, setSpark] = useState(false);
  const [spinning, setSpinning] = useState(!animate);

  useEffect(() => {
    if (!active || !animate) return;

    let cancelled = false;
    let flight = null;
    let clone = null;
    let spinTimer = null;

    const complete = () => {
      if (cancelled) return;

      setSettled(true);
      setSpark(true);

      spinTimer = window.setTimeout(() => {
        if (!cancelled) setSpinning(true);
      }, 650);
    };

    const startFlight = async () => {
      const source = document.getElementById(
        "nav-wordmark-source"
      );

      const destination = targetRef.current;

      if (!source || !destination) {
        complete();
        return;
      }

      if (
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
      ) {
        setSettled(true);
        setSpinning(false);
        return;
      }

      try {
        await source.decode();
      } catch {
        // Continue if decoding has already happened.
      }

      if (cancelled) return;

      // Measure actual positions, not guessed pixel values.
      const from = source.getBoundingClientRect();
      const to = destination.getBoundingClientRect();

      if (!from.width || !to.width) {
        complete();
        return;
      }

      // Keep original navbar wordmark completely unchanged.
      clone = document.createElement("img");

      clone.src = source.currentSrc || source.src;
      clone.alt = "";
      clone.setAttribute("aria-hidden", "true");

      Object.assign(clone.style, {
        position: "fixed",
        left: `${from.left}px`,
        top: `${from.top}px`,
        width: `${from.width}px`,
        height: `${from.height}px`,
        objectFit: "contain",
        pointerEvents: "none",
        zIndex: "10000",
        transformOrigin: "center center",
        filter:
          "drop-shadow(0 8px 18px rgba(0,0,0,.45))",
      });

      document.body.appendChild(clone);

      const dx =
        to.left + to.width / 2 -
        (from.left + from.width / 2);

      const dy =
        to.top + to.height / 2 -
        (from.top + from.height / 2);

      const endScale = to.width / from.width;

      flight = clone.animate(
        [
          {
            offset: 0,
            opacity: 1,
            transform:
              "translate3d(0,0,0) scale(1)",
          },
          {
            // Extract smoothly from navbar.
            offset: 0.2,
            opacity: 1,
            transform:
              "translate3d(0,14px,0) scale(1.25)",
          },
          {
            // Brief enlarged hero moment.
            offset: 0.4,
            opacity: 1,
            transform:
              `translate3d(${dx * 0.28}px,` +
              `${dy * 0.22}px,0) scale(1.38)`,
          },
          {
            // Approach shield.
            offset: 0.82,
            opacity: 1,
            transform:
              `translate3d(${dx * 0.9}px,` +
              `${dy * 0.88}px,0) ` +
              `scale(${endScale * 1.10})`,
          },
          {
            // Exact final location.
            offset: 1,
            opacity: 1,
            transform:
              `translate3d(${dx}px,${dy}px,0) ` +
              `scale(${endScale})`,
          },
        ],
        {
          duration: 2000,
          easing: "cubic-bezier(.22,1,.36,1)",
          fill: "forwards",
        }
      );

      try {
        await flight.finished;
      } catch {
        return;
      }

      if (cancelled) return;

      // Show the permanent branding at the exact
      // same location before removing the flying clone.
      setSettled(true);
      setSpark(true);

      requestAnimationFrame(() => {
        clone?.remove();
      });

      spinTimer = window.setTimeout(() => {
        if (!cancelled) setSpinning(true);
      }, 1800);
    };

    startFlight();

    return () => {
      cancelled = true;
      flight?.cancel();
      clone?.remove();
      if (spinTimer) window.clearTimeout(spinTimer);
    };
  }, [active, animate]);

  return (
    <div
      ref={targetRef}
      className={`shield-wordmark-target ${
        settled ? "is-settled" : ""
      }`}
    >
      <img
        src={WORDMARK}
        className="shield-wordmark-text"
        alt=""
        aria-hidden="true"
      />

      <span
        className={`shield-wordmark-star-holder ${
          spark ? "spark" : ""
        }`}
      >
        <img
          src={STAR}
          alt=""
          aria-hidden="true"
          className={`shield-wordmark-star ${
            spinning ? "spin" : ""
          }`}
        />
      </span>
    </div>
  );
}
