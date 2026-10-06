
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronsRight } from "lucide-react";
import "../../style/Hero.css";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const connection = navigator.connection;

    const updateVideo = () => {
      if (motion.matches || connection?.saveData) {
        video.pause();
      } else {
        video.play().catch(() => {
          // Keep the static hero background when autoplay is unavailable.
        });
      }
    };

    updateVideo();
    motion.addEventListener("change", updateVideo);

    return () =>
      motion.removeEventListener("change", updateVideo);
  }, []);

  return (
    <section className="royal-hero">

      <div className="royal-hero-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="royal-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/videos/video.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="royal-hero-overlay" />

      <div className="royal-hero-inner">

        <div className="royal-hero-left">

          <Link
            to="/member/login"
            className="royal-ticket-strip"
          >
            <span className="royal-ticket-symbol">✦</span>
            <span>
              CURRENT MEMBER? LOGIN TO SUBMIT A TICKET
            </span>
            <ChevronsRight size={18} />
          </Link>

          <div className="royal-hero-heading">
            <span className="royal-hero-kicker">
              ESTABLISHED IN STRENGTH & PROTECTION
            </span>

            <h1>
              YOUR TRUSTED
              <br />
              PARTNER IN
              <br />
              <span>CDL DEFENSE</span>
            </h1>

            <div className="royal-heading-divider">
              <span />
              <b>✦</b>
              <span />
            </div>

            <p>
              Safeguarding your CDL and your career
              through professional protection and
              dedicated support for truck drivers.
            </p>
          </div>

          <div className="royal-hero-buttons">
            <Link to="/plans" className="royal-btn-gold">
              EXPLORE OUR PLANS
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/member/login"
              className="royal-btn-outline"
            >
              MEMBER PORTAL
              <ArrowUpRight size={17} />
            </Link>
          </div>

        </div>

        <div className="royal-hero-right">
          <div className="royal-crest-glow" />

          <img
            src="/images/shield_only.png"
            alt="CDL Defense shield"
            className="royal-crest"
            width="1122"
            height="1402"
            fetchPriority="high"
            decoding="async"
          />
        </div>

      </div>

      <div className="royal-hero-bottom">
        <span>INTEGRITY</span>
        <b>✦</b>
        <span>STRENGTH</span>
        <b>✦</b>
        <span>PROTECTION</span>
      </div>

    </section>
  );
}
