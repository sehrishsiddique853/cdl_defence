
import {
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Mail,
  Phone,
} from "lucide-react";
import "../../style/Footer.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Membership Plans", href: "/#plans" },
  { label: "Our Services", href: "/#protection" },
];

const protectionLinks = [
  
  { label: "Fleet Plan", href: "/#plans" },
  { label: "Individual Plan", href: "/#plans" },
];

export default function Footer() {
  return (
    <footer className="cdl-footer">
      <div className="cdl-footer-accent" />

      <div className="cdl-footer-container">

        <div className="cdl-footer-grid">

          {/* Brand */}
          <div className="cdl-footer-brand">
            <div className="cdl-footer-logos">
              <a href="/" className="cdl-footer-name-logo">
                <img
                  src="/images/footer-wordmark-trim.png"
                  alt="CDL Defense"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <a href="/" className="cdl-footer-logo">
                <img
                  src="/images/logo-optimized.png"
                  alt="CDL Defense crest"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>

            <p>
              Dedicated to supporting commercial
              drivers and fleet operators with
              CDL protection, compliance assistance,
              and professional driver support.
            </p>

            <div className="cdl-footer-motto">
              <ShieldCheck size={18} />
              YOUR CAREER. OUR COMMITMENT.
            </div>
          </div>

          {/* Quick links */}
          <div className="cdl-footer-column">
            <h3>QUICK LINKS</h3>
            <div className="cdl-footer-heading-line" />

            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <span className="cdl-footer-arrow">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="cdl-footer-column">
            <h3>OUR SERVICES</h3>
            <div className="cdl-footer-heading-line" />

            <ul>
              {protectionLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <span className="cdl-footer-arrow">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="cdl-footer-column cdl-footer-contact">
            <h3>GET IN TOUCH</h3>
            <div className="cdl-footer-heading-line" />

            <div className="cdl-footer-contact-item">
              <MapPin size={17} />
              <div>
                <span>ADDRESS</span>
                <p>
                  5208 Zephyr Ave
                  <br />
                  Clinton, MD 20735, USA
                </p>
              </div>
            </div>

            <div className="cdl-footer-contact-item">
              <Mail size={17} />
              <div>
                <span>EMAIL</span>
                <a href="mailto:support@example.com">
                  support@example.com
                </a>
              </div>
            </div>

            <div className="cdl-footer-contact-item">
              <Phone size={17} />
              <div>
                <span>PHONE</span>
                <a href="tel:+12025550147">
                  +1 (202) 555-0147
                </a>
              </div>
            </div>

            <a
              className="cdl-footer-map"
              href="https://www.google.com/maps/search/?api=1&query=5208+Zephyr+Ave+Clinton+MD+20735"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW ON GOOGLE MAPS
              <ArrowUpRight size={14} />
            </a>
          </div>

        </div>

        {/* Bottom footer */}
        <div className="cdl-footer-bottom">

          <p>
            © {new Date().getFullYear()} CDL DEFENSE.
            ALL RIGHTS RESERVED.
          </p>

          <div className="cdl-footer-bottom-right">
            <span>INTEGRITY</span>
            <b>✦</b>
            <span>STRENGTH</span>
            <b>✦</b>
            <span>PROTECTION</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
