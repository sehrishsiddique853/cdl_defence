import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  Headphones,
  Mail,
  MapPin,
  Phone,
  ReceiptText,
  ShieldCheck,
  Truck,
  UserRound,
} from "lucide-react";
import "../../style/ContactPage.css";

const contactDepartments = [
  {
    label: "MEMBER SUPPORT",
    title: "Existing Members",
    text:
      "For help accessing your membership, understanding your plan, or getting general assistance with your CDL Defense account.",
    phone: "+1 (202) 555-0147",
    phoneHref: "+12025550147",
    email: "support@example.com",
    Icon: Headphones,
  },
  {
    label: "CDL & CITATION SUPPORT",
    title: "Submit or Discuss an Issue",
    text:
      "For CDL-related concerns, traffic citations, or questions about an issue you need to submit through your membership.",
    phone: "+1 (202) 555-0182",
    phoneHref: "+12025550182",
    email: "cases@example.com",
    Icon: FileText,
  },
  {
    label: "BILLING",
    title: "Membership & Payments",
    text:
      "For questions about membership billing, payment information, invoices, or account-related payment concerns.",
    phone: "+1 (202) 555-0164",
    phoneHref: "+12025550164",
    email: "billing@example.com",
    Icon: ReceiptText,
  },
  {
    label: "FLEET SUPPORT",
    title: "Fleet Membership Assistance",
    text:
      "For fleet operators who need help understanding coverage, managing covered drivers, or discussing fleet membership options.",
    phone: "+1 (202) 555-0191",
    phoneHref: "+12025550191",
    email: "fleet@example.com",
    Icon: Truck,
  },
];

const faqs = [
  {
    question: "How do I contact CDL Defense member support?",
    answer:
      "You can contact member support by phone or email using the details on this page. Existing members can also sign in to the member portal to access their membership information and submit support requests.",
  },
  {
    question: "What should I do if I receive a traffic citation?",
    answer:
      "Keep the citation and any related documentation, then sign in to your member account and submit the issue with as much accurate information as possible. If you are unsure where to begin, contact the CDL and citation support department.",
  },
  {
    question: "Can I call before submitting an issue?",
    answer:
      "Yes. If you are unsure what information is needed or which department should handle your concern, you can contact member support first and ask for guidance on the appropriate next step.",
  },
  {
    question: "Who should I contact about a DOT inspection issue?",
    answer:
      "For concerns related to a roadside inspection, inspection report, or other CDL-related compliance issue, contact the CDL and citation support department or submit the information through your member portal.",
  },
  {
    question: "Who handles billing questions?",
    answer:
      "Membership payments, billing questions, invoice concerns, and other payment-related matters should be directed to the billing department using the contact information above.",
  },
  {
    question: "Do you support fleet operators?",
    answer:
      "Yes. Fleet operators can contact the fleet support department for questions about fleet membership, covered drivers, and the support available through the fleet plan.",
  },
  {
    question: "Where is CDL Defense located?",
    answer:
      "The current office address listed for CDL Defense is 5208 Zephyr Ave, Clinton, MD 20735, USA.",
  },
  {
    question: "Can I manage my membership online?",
    answer:
      "Yes. Members can use the CDL Defense member portal to access their account and submit relevant support information.",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`contact-reveal ${className}`}
      style={{
        "--contact-delay": `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-glow contact-hero-glow-one" />
        <div className="contact-hero-glow contact-hero-glow-two" />

        <div className="contact-container contact-hero-grid">

          <div className="contact-hero-copy">
            <span className="contact-kicker">
              CONTACT CDL DEFENSE
            </span>

            <h1>
              WE'RE HERE
              <span> WHEN YOU NEED US</span>
            </h1>

            <p className="contact-hero-lead">
              Whether you need help with your membership, a
              CDL-related concern, billing, or fleet support,
              you can reach the right department directly.
            </p>

            <p>
              No forms to wait on. Choose the contact that best
              matches your situation and speak with the appropriate
              CDL Defense support team.
            </p>

            <div className="contact-hero-actions">
              <a
                href="tel:+12025550147"
                className="contact-primary-button"
              >
                <Phone size={17} />
                CALL MEMBER SUPPORT
              </a>

              <Link
                to="/member/login"
                className="contact-secondary-button"
              >
                MEMBER PORTAL
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="contact-hero-info">
            <div className="contact-office-mark">
              <ShieldCheck size={23} />
            </div>

            <span className="contact-office-label">
              CDL DEFENSE OFFICE
            </span>

            <h2>
              Clinton, Maryland
            </h2>

            <div className="contact-office-address">
              <MapPin size={19} />

              <p>
                5208 Zephyr Ave
                <br />
                Clinton, MD 20735
                <br />
                United States
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=5208+Zephyr+Ave+Clinton+MD+20735"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW LOCATION
              <ArrowRight size={15} />
            </a>
          </div>

        </div>
      </section>

      {/* CONTACT DIRECTORY */}
      <section className="contact-directory">
        <div className="contact-container">

          <Reveal className="contact-section-heading">
            <span>CONTACT DIRECTORY</span>

            <h2>
              REACH THE
              <strong> RIGHT TEAM DIRECTLY</strong>
            </h2>

            <p>
              Select the department that best matches your question
              so your request reaches the appropriate support team.
            </p>
          </Reveal>

          <div className="contact-department-list">
            {contactDepartments.map((department, index) => {
              const Icon = department.Icon;

              return (
                <Reveal
                  key={department.title}
                  className="contact-department-reveal"
                  delay={index * 90}
                >
                  <article className="contact-department-row">

                    <div className="contact-department-index">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="contact-department-icon">
                      <Icon size={21} />
                    </div>

                    <div className="contact-department-copy">
                      <span>{department.label}</span>

                      <h3>{department.title}</h3>

                      <p>{department.text}</p>
                    </div>

                    <div className="contact-department-links">
                      <a
                        href={`tel:${department.phoneHref}`}
                        className="contact-phone-link"
                      >
                        <Phone size={15} />

                        <span>
                          <small>CALL</small>
                          {department.phone}
                        </span>
                      </a>

                      <a
                        href={`mailto:${department.email}`}
                        className="contact-email-link"
                      >
                        <Mail size={15} />

                        <span>
                          <small>EMAIL</small>
                          {department.email}
                        </span>
                      </a>
                    </div>

                  </article>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* QUICK SUPPORT STRIP */}
      <section className="contact-quick">
        <div className="contact-container">

          <div className="contact-quick-grid">

            <Reveal className="contact-quick-copy">
              <span className="contact-kicker">
                ALREADY A MEMBER?
              </span>

              <h2>
                YOUR MEMBER PORTAL
                <span> IS THE FASTEST PLACE TO START</span>
              </h2>

              <p>
                If you already have a CDL Defense membership,
                sign in to access your account and submit the
                relevant information connected to your issue.
              </p>
            </Reveal>

            <Reveal className="contact-quick-action">
              <UserRound size={25} />

              <strong>
                MEMBER ACCESS
              </strong>

              <p>
                Review membership information and submit
                support requests from one place.
              </p>

              <Link to="/member/login">
                LOGIN TO MEMBER PORTAL
                <ArrowRight size={16} />
              </Link>
            </Reveal>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq">
        <div className="contact-container contact-faq-grid">

          <Reveal className="contact-faq-heading">
            <span className="contact-kicker">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>
              NEED A QUICK
              <span> ANSWER?</span>
            </h2>

            <p>
              Find answers to common questions about contacting
              CDL Defense, submitting issues, billing, and member
              support.
            </p>

          </Reveal>

          <div className="contact-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`contact-faq-item ${
                    isOpen ? "open" : ""
                  }`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                  >
                    <span className="contact-faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="contact-faq-question">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      className="contact-faq-chevron"
                    />
                  </button>

                  <div className="contact-faq-answer">
                    <div>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL CONTACT */}
      <section className="contact-final">
        <div className="contact-final-glow" />

        <div className="contact-container contact-final-inner">
          <ShieldCheck size={30} />

          <span>
            CDL DEFENSE MEMBER SUPPORT
          </span>

          <h2>
            NOT SURE WHO TO CALL?
            <strong> START WITH MEMBER SUPPORT.</strong>
          </h2>

          <p>
            We’ll help point you toward the appropriate next step.
          </p>

          <a href="tel:+12025550147">
            <Phone size={16} />
            +1 (202) 555-0147
          </a>
        </div>
      </section>

    </main>
  );
}
