
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "../../style/AnimatedShield.css";
import ShieldWordmarkArrival from "./ShieldWordmarkArrival";

// This is evaluated once when the website document loads.
// Navigating between React pages does not reset it.
const openedDirectlyOnHome =
  typeof window !== "undefined" &&
  window.location.pathname === "/";

let introConsumed = false;

const LOGO = "/images/logo.png";
const SHIELD = "/images/shield_only.png";

const INTRO_DURATION = 6000;

export default function AnimatedShield() {
  const targetRef = useRef(null);
  const floatingRef = useRef(null);
  const animationRef = useRef(null);

  const [playIntro] = useState(() => {
    if (!openedDirectlyOnHome || introConsumed) {
      return false;
    }

    introConsumed = true;
    return true;
  });

  const [finished, setFinished] = useState(!playIntro);
  const [showFire, setShowFire] = useState(false);

  useEffect(() => {
    if (!playIntro) return;

    const floatingLogo = floatingRef.current;
    const targetLogo = targetRef.current;

    if (!floatingLogo || !targetLogo) return;

    let cancelled = false;
    let animation = null;
    let fireStartTimer = null;
    let fireStopTimer = null;

    const start = async () => {
      // Ensure both assets are available before animating.
      try {
        await Promise.all([
          floatingLogo.decode(),
          targetLogo.decode(),
        ]);
      } catch {
        // Image loading errors should not block the page.
      }

      if (cancelled) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        setFinished(true);
        return;
      }

      const target = targetLogo.getBoundingClientRect();

      const float = floatingLogo.getBoundingClientRect();

      if (!target.width || !target.height || !float.width) {
        setFinished(true);
        return;
      }

      const targetCenterX =
        target.left + target.width / 2;

      const targetCenterY =
        target.top + target.height / 2;

      const floatCenterX =
        float.left + float.width / 2;

      const floatCenterY =
        float.top + float.height / 2;

      const dx = targetCenterX - floatCenterX;
      const dy = targetCenterY - floatCenterY;

      const scale = target.width / float.width;

      const transformAt = (
        x,
        y,
        size,
        rotation = 0
      ) =>
        `translate(-50%, -50%) ` +
        `translate3d(${x}px, ${y}px, 0) ` +
        `scale(${size}) ` +
        `rotate(${rotation}deg)`;

      animation = floatingLogo.animate(
        [
          // First reveal
          {
            offset: 0,
            opacity: 0,
            transform: transformAt(0, 0, 0.35, -12),
          },

          // Pop and slight overshoot
          {
            offset: 0.12,
            opacity: 1,
            transform: transformAt(0, 0, 1.12, 3),
          },

          // Settle in center
          {
            offset: 0.2,
            opacity: 1,
            transform: transformAt(0, 0, 1, 0),
          },

          // Hold visibly in center
          {
            offset: 0.52,
            opacity: 1,
            transform: transformAt(0, -8, 1, 0),
          },

          {
            offset: 0.65,
            opacity: 1,
            transform: transformAt(0, 0, 1, 0),
          },

          // Begin elegant movement
          {
            offset: 0.76,
            opacity: 1,
            transform: transformAt(
              dx * 0.18,
              dy * 0.18,
              0.94,
              95
            ),
          },

          // Fly toward the shield
          {
            offset: 0.91,
            opacity: 1,
            transform: transformAt(
              dx * 0.83,
              dy * 0.83,
              scale * 1.17,
              315
            ),
          },

          // Exact destination
          {
            offset: 1,
            opacity: 1,
            transform: transformAt(
              dx,
              dy,
              scale,
              360
            ),
          },
        ],
        {
          duration: INTRO_DURATION,
          easing: "cubic-bezier(.22, 1, .36, 1)",
          fill: "forwards",
        }
      );

      animationRef.current = animation;

      // Fire burst appears only during the final approach,
      // just before the dragon locks into the shield.
      fireStartTimer = window.setTimeout(() => {
        if (!cancelled) setShowFire(true);
      }, 5250);

      fireStopTimer = window.setTimeout(() => {
        if (!cancelled) setShowFire(false);
      }, 5920);

      animation.onfinish = () => {
        if (!cancelled) {
          setFinished(true);
        }
      };
    };

    start();

    return () => {
      cancelled = true;
      animation?.cancel();
      if (fireStartTimer) window.clearTimeout(fireStartTimer);
      if (fireStopTimer) window.clearTimeout(fireStopTimer);
      setShowFire(false);
    };
  }, [playIntro]);

  return (
    <>
      <div className="animated-shield">

        <img
          src={SHIELD}
          className="animated-shield-base"
          alt="CDL Defense protection shield"
          fetchPriority="high"
        />

        

       
        <img
          ref={targetRef}
          src={LOGO}
          className={`animated-shield-dragon ${
            finished ? "is-settled" : ""
          }`}
          alt=""
          aria-hidden="true"
        />

        <div
          className={`animated-shield-final-light ${
            finished ? "is-active" : ""
          }`}
        />

        {showFire && !finished && (
          <div className="shield-dragon-fire" aria-hidden="true">
            <span className="shield-dragon-fire-outer" />
            <span className="shield-dragon-fire-mid" />
            <span className="shield-dragon-fire-core" />
            <span className="shield-dragon-fire-spark spark-one" />
            <span className="shield-dragon-fire-spark spark-two" />
            <span className="shield-dragon-fire-spark spark-three" />
          </div>
        )}

        <ShieldWordmarkArrival
  active={finished}
  animate={playIntro}
/>

      </div>

      {playIntro && !finished &&
        createPortal(
          <div
            className="shield-intro-stage"
            aria-hidden="true"
          >
            <div className="shield-intro-backdrop" />

            <div className="shield-intro-center-effects">
              <div className="shield-intro-halo" />
              <div className="shield-intro-ring ring-one" />
              <div className="shield-intro-ring ring-two" />
              <div className="shield-intro-ring ring-three" />
            </div>

            <img
              ref={floatingRef}
              src={LOGO}
              className="shield-intro-floating-logo"
              alt=""
            />

            <div className="shield-intro-bottom-line">
              CDL DEFENSE
              <span>✦</span>
              YOUR CAREER. OUR COMMITMENT.
            </div>
          </div>,
          document.body
        )
      }
      
    </>
  );
}
