import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  ArrowRight,
  Headphones,
  Check,
} from "lucide-react";
import "../../style/Login.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend login API will be connected here later.
  };

  return (
    <main className="member-login-page">
      <div className="member-login-bg" />

      <div className="member-login-container">

        {/* LEFT SIDE */}
        <section className="member-login-info">
          <div className="member-login-brand">
            <img
              src="/images/footer-wordmark-trim.png"
              alt="CDL Defense"
              className="member-login-wordmark"
            />

            <img
              src="/images/logo-optimized.png"
              alt=""
              aria-hidden="true"
              className="member-login-crest"
            />
          </div>

          <span className="member-login-kicker">
            MEMBER ACCESS
          </span>

          <h1>
            YOUR CDL SUPPORT
            <span> WHEN YOU NEED IT</span>
          </h1>

          <p>
            Access your CDL Defense membership, submit support
            requests, review your information, and stay connected
            with the team supporting your career on the road.
          </p>

          <div className="member-login-benefits">
            <div>
              <Check size={15} />
              <span>Access your membership</span>
            </div>

            <div>
              <Check size={15} />
              <span>Submit support requests</span>
            </div>

            <div>
              <Check size={15} />
              <span>Keep your case information organized</span>
            </div>
          </div>

          <div className="member-login-secure">
            <ShieldCheck size={17} />
            <span>Secure member portal</span>
          </div>
        </section>

        {/* FORM SIDE */}
        <section className="member-login-form-panel">
          <div className="member-login-form-wrapper">

            <div className="member-login-form-heading">
              <span>WELCOME BACK</span>

              <h2>Member Login</h2>

              <p>
                Sign in to access your CDL Defense member portal.
              </p>
            </div>

            <form
              className="member-login-form"
              onSubmit={handleSubmit}
            >
              <div className="member-login-field">
                <label htmlFor="email">
                  Email Address
                </label>

                <div className="member-login-input">
                  <Mail size={17} />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="member-login-field">
                <div className="member-login-password-label">
                  <label htmlFor="password">
                    Password
                  </label>

                  <Link to="/member/forgot-password">
                    Forgot password?
                  </Link>
                </div>

                <div className="member-login-input">
                  <LockKeyhole size={17} />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                  />

                  <button
                    type="button"
                    className="member-password-toggle"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
              </div>

              

              <button
                type="submit"
                className="member-login-submit"
              >
                LOGIN TO MEMBER PORTAL
                <ArrowRight size={17} />
              </button>
            </form>

            <div className="member-login-support">
              <div>
                <Headphones size={18} />
              </div>

             

            </div>

          </div>
        </section>

      </div>
    </main>
  );
}