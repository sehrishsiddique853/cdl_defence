
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import "../../style/Welcome.css";

export default function Welcome() {
  return (
    <section className="welcome-section" id="about">
      <div className="welcome-container">

        <div className="welcome-header">
          <span className="welcome-kicker">
            YOUR CAREER IS WORTH PROTECTING
          </span>

          <h2>
            PROTECT YOUR CDL
            <span> DRIVE WITH CONFIDENCE</span>
          </h2>

          <div className="welcome-divider">
            <span />
            <b>✦</b>
            <span />
          </div>
        </div>

        <div className="welcome-content">

          <div className="welcome-image-wrapper">
            <img
              src="/images/crimson1-optimized.jpg"
              alt="Commercial truck driving on an open highway"
              className="welcome-image"
              loading="lazy"
              decoding="async"
            />

            <div className="welcome-image-badge">
              <ShieldCheck size={20} />
              <span>YOUR JOURNEY. OUR COMMITMENT.</span>
            </div>
          </div>

          <div className="welcome-text">

            <div className="welcome-label">
              <span className="welcome-label-line" />
              WELCOME TO CDL DEFENSE
            </div>

            <h3>
              Your CDL.
              <br />
              <span>Your Livelihood.</span>
              <br />
              Our Priority.
            </h3>

            <p>
              At <strong>CDL Defense</strong>, we understand
              that your Commercial Driver's License is more
              than just a license. It represents your career,
              your livelihood, and the countless miles of
              dedication behind every journey.
            </p>

            <p>
              That's why we're committed to helping commercial
              truck drivers navigate the challenges of the
              road. From traffic violations and DOT-related
              concerns to professional guidance and driver
              support, our goal is to help you protect what
              matters most.
            </p>

            <p>
              Whether you're an independent owner-operator
              or a professional driver, CDL Defense is
              dedicated to providing the support and
              confidence you need to keep moving forward.
            </p>

            <div className="welcome-actions">
              <Link to="/about" className="welcome-button">
                MORE ABOUT US
                <ArrowUpRight size={18} />
              </Link>

              <Link to="/plans" className="welcome-text-link">
                Explore Our Plans
                <ArrowUpRight size={17} />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
