
import { useEffect, useRef, useState } from "react";
import "../../style/AnimatedShield.css";

const STORAGE_KEY = "cdl-defense-intro-seen";

function hasSeenIntro() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "yes";
  } catch {
    return false;
  }
}

export default function AnimatedShield() {
  const shieldRef = useRef(null);
  const logoRef = useRef(null);

  const [settled, setSettled] = useState(hasSeenIntro);

  useEffect(() => {
    if (settled) return;

    let cancelled = false;
    let animation;
    let floatingLogo;

    const finish = () => {
      if (cancelled) return;

      setSettled(true);

      try {
        localStorage.setItem(STORAGE_KEY, "yes");
      } catch {
        // Animation still works if storage is unavailable.
      }

      floatingLogo?.remove();
    };

    const startAnimation = async () => {
      const shield = shieldRef.current;
      const logo = logoRef.current;

      if (!shield || !logo) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        finish();
        return;
      }

      // Wait for both images to load.
      try {
        await Promise.all([
          shield.decode(),
          logo.decode(),
        ]);
      } catch {
        // Continue if image decoding isn't supported.
      }

      if (cancelled) return;

      // Get the exact final location of the dragon logo.
      const rect = logo.getBoundingClientRect();

      if (!rect.width || !rect.height) {
        finish();
        return;
      }

      const targetX = rect.left + rect.width / 2;
      const targetY = rect.top + rect.height / 2;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = centerX - targetX;
      const moveY = centerY - targetY;

      // Large introductory size, responsive to screen width.
      const desiredWidth = Math.min(
        window.innerWidth * 0.65,
        340
      );

      const startScale = Math.min(
        4.5,
        Math.max(1.5, desiredWidth / rect.width)
      );

      // Floating copy that travels into the shield.
      floatingLogo = document.createElement("img");
      floatingLogo.src = "/images/logo.png";
      floatingLogo.alt = "";
      floatingLogo.setAttribute("aria-hidden", "true");

      Object.assign(floatingLogo.style, {
        position: "fixed",
        left: `${rect.left}px`,
        top: `${rect.top}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        objectFit: "contain",
        transformOrigin: "center center",
        pointerEvents: "none",
        zIndex: "9999",
        filter: "drop-shadow(0 20px 28px rgba(0,0,0,.5))",
      });

      document.body.appendChild(floatingLogo);

      const atCenter = (scale, rotation) =>
        `translate(${moveX}px, ${moveY}px) ` +
        `scale(${scale}) rotate(${rotation}deg)`;

      animation = floatingLogo.animate(
        [
          {
            offset: 0,
            opacity: 0,
            transform: atCenter(startScale * 0.55, -360),
          },
          {
            offset: 0.16,
            opacity: 1,
            transform: atCenter(startScale * 1.08, -330),
          },
          {
            offset: 0.35,
            opacity: 1,
            transform: atCenter(startScale, -260),
          },
          {
            offset: 0.75,
            opacity: 1,
            transform:
              `translate(${moveX * 0.15}px, ` +
              `${moveY * 0.15}px) ` +
              "scale(1.18) rotate(-35deg)",
          },
          {
            offset: 1,
            opacity: 1,
            transform: "translate(0px, 0px) scale(1) rotate(0deg)",
          },
        ],
        {
          duration: 2800,
          easing: "cubic-bezier(.22, .8, .2, 1)",
          fill: "forwards",
        }
      );

      animation.onfinish = finish;
    };

    startAnimation();

    return () => {
      cancelled = true;
      animation?.cancel();
      floatingLogo?.remove();
    };
  }, [settled]);

  return (
    <div className="animated-shield">

      {/* Empty shield background */}
      <img
        ref={shieldRef}
        src="/images/shield_only.png"
        alt="CDL Defense protection shield"
        className="animated-shield-base"
        fetchPriority="high"
      />

      {/* Dragon logo final position */}
      <img
        ref={logoRef}
        src="/images/logo.png"
        alt=""
        aria-hidden="true"
        className={
          `animated-shield-dragon ${
            settled ? "is-settled" : ""
          }`
        }
      />

    </div>
  );
}
