import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  ClipboardCheck,
  Headphones,
  ShieldCheck,
  Truck,
  UserRound,
  FileText,
  CheckCircle2,
} from "lucide-react";
import "../../style/AboutPage.css";

const process = [
  {
    number: "01",
    title: "Become a Member",
    text:
      "Choose the membership that fits your situation, whether you drive independently or manage drivers as part of a fleet.",
  },
  {
    number: "02",
    title: "Tell Us What Happened",
    text:
      "When a CDL-related concern, traffic citation, or inspection issue occurs, submit the relevant details through your member account.",
  },
  {
    number: "03",
    title: "Keep Everything Organized",
    text:
      "Your case information can be reviewed in one place so the situation is easier to understand and the next steps are clearer.",
  },
  {
    number: "04",
    title: "Move Forward With Support",
    text:
      "Instead of handling an unfamiliar situation alone, you have a support system designed around the realities of professional driving.",
  },
];

const faqs = [
  {
    question: "What is CDL Defense?",
    answer:
      "CDL Defense is a membership-based support service created for commercial drivers and fleets. Our goal is to give members a dependable place to turn when CDL-related concerns, traffic citations, DOT inspection issues, or other driving-related situations arise.",
  },
  {
    question: "Who can become a CDL Defense member?",
    answer:
      "Our memberships are designed for professional commercial drivers, owner-operators, and fleet operators. Individual drivers can choose an individual plan, while businesses that manage drivers can choose the fleet option that best fits their needs.",
  },
  {
    question: "What does CDL protection mean?",
    answer:
      "CDL protection means having an organized support system available when an issue may affect your commercial driving career. Depending on the situation and your membership, that may include helping you organize case information, understand the process, and determine the appropriate next steps.",
  },
  {
    question: "Does the membership include DOT inspection support?",
    answer:
      "Yes. CDL Defense is designed to help members with inspection-related concerns, including understanding inspection information and organizing the details connected to a DOT inspection issue.",
  },
  {
    question: "What should I do if I receive a traffic citation?",
    answer:
      "Members should gather the citation and any relevant documents, then submit the issue through the member portal. Providing complete and accurate information helps make the situation easier to review and organize.",
  },
  {
    question: "Can fleet operators use CDL Defense?",
    answer:
      "Yes. The Fleet Plan is intended for businesses that want a structured CDL support option for covered drivers. It gives fleets a more organized way to provide access to CDL-related assistance when issues occur.",
  },
  {
    question: "How do I submit an issue?",
    answer:
      "Members can log in to the member portal and submit the relevant details about their situation. The portal is intended to keep membership and support information organized in one place.",
  },
  {
    question: "Is CDL Defense only useful after something goes wrong?",
    answer:
      "No. One of the advantages of membership is having support already in place before an issue occurs. That means you know where to go and what process to follow instead of trying to find help during a stressful situation.",
  },
  {
    question: "Does membership guarantee a specific result?",
    answer:
      "No. Every driving, citation, inspection, and regulatory situation is different. CDL Defense provides support within the scope of the selected membership, but no specific legal, administrative, or case outcome should be considered guaranteed.",
  },
  {
    question: "How do I know which plan is right for me?",
    answer:
      "If you are an individual commercial driver or owner-operator, the Individual Plan is usually the appropriate option. If you manage drivers for a business or fleet, the Fleet Plan is designed for that type of membership.",
  },
];

function Reveal({ children, className = "" }) {
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
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`about-reveal ${className}`}>
      {children}
    </div>
  );
}

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-glow about-hero-glow-one" />
        <div className="about-hero-glow about-hero-glow-two" />

        <div className="about-page-container about-hero-grid">

          <div className="about-hero-content">
            <span className="about-kicker">
              ABOUT CDL DEFENSE
            </span>

            <h1>
              BUILT AROUND
              <span> THE DRIVER</span>
            </h1>

            <p className="about-hero-lead">
              Professional drivers depend on their CDL to earn a
              living. When something threatens that career, the
              situation can become confusing very quickly.
            </p>

            <p>
              CDL Defense exists to give commercial drivers and fleets
              a clear place to turn. Our membership is designed around
              practical support, organized case information, and a
              simpler path forward when CDL-related concerns arise.
            </p>

            <div className="about-hero-actions">
              <Link to="/plans" className="about-primary-button">
                VIEW MEMBERSHIP PLANS
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/member/login"
                className="about-secondary-button"
              >
                MEMBER PORTAL
              </Link>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-crest-ring about-crest-ring-one" />
            <div className="about-crest-ring about-crest-ring-two" />

            <img
              src="/images/logo-optimized.png"
              alt="CDL Defense crest"
              className="about-hero-crest"
            />

            <div className="about-hero-badge">
              <ShieldCheck size={18} />
              <span>
                SUPPORT FOR PROFESSIONAL DRIVERS
              </span>
            </div>
          </div>

        </div>
      </section>

     <section className="about-story">
  <div className="about-page-container">

    <div className="about-story-heading">
      <span className="about-section-kicker">
        WHO WE ARE
      </span>

      <h2>
        A SUPPORT SYSTEM BUILT
        <span> FOR THE ROAD</span>
      </h2>
    </div>

    <div className="about-story-layout">

      <div className="about-story-visual">
        <span className="about-story-big-number">
          01
        </span>

        <div className="about-story-image-frame">
          <img
            src="/images/crimson1-optimized.jpg"
            alt="Professional commercial truck on the road"
            className="about-story-image"
          />
        </div>

        <div className="about-story-caption">
          <span>CDL DEFENSE</span>
          <strong>
            Built around the realities of professional driving.
          </strong>
        </div>
      </div>

      <div className="about-story-copy">

        <p className="about-story-lead">
          Commercial driving is different from almost any other
          profession. Your ability to work is directly connected
          to your driving record, your license, inspections, and
          compliance requirements.
        </p>

        <p>
          That means even a single issue can create uncertainty.
          A citation, inspection report, or unfamiliar document
          can quickly become something that affects more than just
          your day — it can affect your livelihood.
        </p>

        <p>
          CDL Defense was built to give professional drivers a
          clear place to turn. Instead of figuring everything out
          from the beginning each time something happens, members
          already have a support system and a process to follow.
        </p>

        <div className="about-story-principles">

          <div>
            <span>01</span>
            <strong>Driver Focused</strong>
            <p>
              Designed around the needs of commercial drivers.
            </p>
          </div>

          <div>
            <span>02</span>
            <strong>Clear Process</strong>
            <p>
              A defined way to submit and organize concerns.
            </p>
          </div>

          <div>
            <span>03</span>
            <strong>Prepared Support</strong>
            <p>
              A place to turn before an issue becomes overwhelming.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* WHAT WE DO */}
      <section className="about-do">
        <div className="about-page-container">

          <Reveal className="about-section-heading">
            <span className="about-section-kicker">
              WHAT CDL DEFENSE DOES
            </span>

            <h2>
              WHEN SOMETHING HAPPENS,
              <span> YOU KNOW WHERE TO START</span>
            </h2>

            <p>
              Our role is to create a more organized experience around
              the issues commercial drivers may encounter during their
              careers.
            </p>
          </Reveal>

          <div className="about-do-flow">

            <Reveal className="about-do-item">
              <div className="about-do-icon">
                <FileText size={23} />
              </div>

              <div>
                <span>TRAFFIC & CDL ISSUES</span>
                <h3>Document the Situation</h3>
                <p>
                  Keep the relevant citation, notice, inspection
                  document, or other information connected to the
                  issue.
                </p>
              </div>
            </Reveal>

            <div className="about-flow-line" />

            <Reveal className="about-do-item">
              <div className="about-do-icon">
                <ClipboardCheck size={23} />
              </div>

              <div>
                <span>MEMBER PORTAL</span>
                <h3>Submit the Details</h3>
                <p>
                  Members have a defined place to provide the
                  information connected to their situation.
                </p>
              </div>
            </Reveal>

            <div className="about-flow-line" />

            <Reveal className="about-do-item">
              <div className="about-do-icon">
                <Headphones size={23} />
              </div>

              <div>
                <span>SUPPORT</span>
                <h3>Understand What Comes Next</h3>
                <p>
                  The goal is to make the situation easier to follow
                  and help the member understand the available next
                  steps.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="about-process">
        <div className="about-page-container">

          <Reveal className="about-section-heading">
            <span className="about-section-kicker">
              HOW MEMBERSHIP WORKS
            </span>

            <h2>
              SUPPORT BEFORE
              <span> YOU ACTUALLY NEED IT</span>
            </h2>
          </Reveal>

          <div className="about-process-list">
            {process.map((item, index) => (
              <Reveal
                key={item.number}
                className="about-process-row"
              >
                <div className="about-process-number">
                  {item.number}
                </div>

                <div className="about-process-title">
                  <span>
                    STEP {index + 1}
                  </span>

                  <h3>{item.title}</h3>
                </div>

                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="about-audience">
        <div className="about-page-container about-audience-grid">

          <Reveal className="about-audience-intro">
            <span className="about-section-kicker">
              WHO WE SERVE
            </span>

            <h2>
              BUILT FOR THE PEOPLE
              <span> WHO KEEP AMERICA MOVING</span>
            </h2>

            <p>
              CDL Defense is designed around two groups with the same
              priority: protecting the careers of professional drivers.
            </p>
          </Reveal>

          <Reveal className="about-audience-panel">
            <UserRound size={27} />

            <span>INDIVIDUAL DRIVERS</span>

            <h3>
              Owner-Operators & Professional Drivers
            </h3>

            <p>
              For drivers who want their own membership and a clear
              process to follow when CDL-related concerns arise.
            </p>

            <Link to="/plans?plan=individual">
              EXPLORE INDIVIDUAL PLAN
              <ArrowRight size={15} />
            </Link>
          </Reveal>

          <Reveal className="about-audience-panel">
            <Truck size={28} />

            <span>FLEETS</span>

            <h3>
              Businesses Managing Commercial Drivers
            </h3>

            <p>
              For companies that want a more organized way to provide
              covered drivers with access to CDL-related support.
            </p>

            <Link to="/plans?plan=fleet">
              EXPLORE FLEET PLAN
              <ArrowRight size={15} />
            </Link>
          </Reveal>

        </div>
      </section>

      {/* VALUES STRIP */}
      <section className="about-values">
        <div className="about-page-container">
          <div className="about-values-track">

            <div>
              <span>01</span>
              <strong>CLARITY</strong>
              <p>
                Make complicated situations easier to understand.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>PREPARATION</strong>
              <p>
                Have support in place before an issue happens.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>ORGANIZATION</strong>
              <p>
                Keep relevant case information together.
              </p>
            </div>

            <div>
              <span>04</span>
              <strong>COMMITMENT</strong>
              <p>
                Keep the professional driver's career at the center.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="about-faq" id="faq">
        <div className="about-page-container about-faq-grid">

          <Reveal className="about-faq-heading">
            <span className="about-section-kicker">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>
              QUESTIONS ABOUT
              <span> CDL DEFENSE?</span>
            </h2>

            <p>
              These answers explain how the membership is intended to
              work and what drivers can expect from CDL Defense.
            </p>

          </Reveal>

          <div className="about-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`about-faq-item ${
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
                    <span className="about-faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="about-faq-question">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      className="about-faq-chevron"
                    />
                  </button>

                  <div className="about-faq-answer">
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

      {/* FINAL CTA */}
      <section className="about-final">
        <div className="about-final-glow" />

        <div className="about-page-container about-final-inner">
          <ShieldCheck size={31} />

          <span>
            YOUR CAREER. OUR COMMITMENT.
          </span>

          <h2>
            DON'T WAIT FOR A PROBLEM
            <strong> TO BUILD YOUR SUPPORT SYSTEM.</strong>
          </h2>

          <p>
            Choose the membership that fits your driving career and
            know where to turn when you need help.
          </p>

          <Link to="/plans">
            VIEW CDL DEFENSE PLANS
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

    </main>
  );
}
