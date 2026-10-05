
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "../../style/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [overHero, setOverHero] = useState(isHome);

  useEffect(() => {
    if (!isHome) {
      setOverHero(false);
      return;
    }

    const hero = document.querySelector(".royal-hero");
    if (!hero) {
      setOverHero(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome, location.pathname]);

  return (
    <header className={`royal-navbar ${overHero ? "over-hero" : ""}`}>
      <nav className="royal-nav-inner" aria-label="Main navigation">
        <Link
          to="/"
          className="royal-brand"
          onClick={() => setOpen(false)}
        >
          <img
            className="royal-brand-crest"
            src="/images/logo-optimized.png"
            alt=""
            aria-hidden="true"
            width="140"
            height="178"
            decoding="async"
          />
          <img
            className="royal-brand-wordmark"
            src="/images/footer-wordmark-trim.png"
            alt="CDL Defense"
            width="840"
            height="226"
            fetchPriority="high"
            decoding="async"
          />
        </Link>

        <div
          id="royal-nav-menu"
          className={`royal-nav-links ${open ? "open" : ""}`}
        >
          {[
            ["Home", "/"],
            ["Plans", "/plans"],
            ["About Us", "/about"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/member/login"
            className="royal-mobile-login"
            onClick={() => setOpen(false)}
          >
            Member Login
          </Link>
        </div>

        <Link to="/member/login" className="royal-login">
          Login <ArrowUpRight size={17} />
        </Link>

        <button
          type="button"
          className="royal-menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="royal-nav-menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
