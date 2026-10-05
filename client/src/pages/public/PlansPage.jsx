import {
  ShieldCheck,
  FileText,
  Scale,
  Truck,
  UserRound,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Plans from "../../components/common/Plans";
import "../../style/PlansPage.css";

const protectionItems = [
  {
    icon: FileText,
    title: "Traffic Citation Support",
    text:
      "When a driving citation or CDL-related issue happens, members have a clear place to start. CDL Defense helps you organize the details of the issue and understand the next steps available through your membership.",
  },
  {
    icon: ClipboardCheck,
    title: "DOT Inspection Support",
    text:
      "Roadside inspections can create questions about reports, violations, and compliance concerns. Our support helps drivers stay informed and better prepared when inspection-related issues arise.",
  },
  {
    icon: ShieldCheck,
    title: "CDL Career Protection",
    text:
      "Your CDL is directly connected to your livelihood. Our membership is designed to give professional drivers ongoing support when issues arise that may affect their commercial driving career.",
  },
  {
    icon: Scale,
    title: "Case Guidance",
    text:
      "Instead of trying to figure everything out alone, members can submit the details of their issue and receive guidance on what information may be needed and what steps should be taken next.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose Your Plan",
    text:
      "Select the membership that best fits you — individual protection for a single driver or fleet coverage for multiple drivers.",
  },
  {
    number: "02",
    title: "Become a Member",
    text:
      "Complete your membership setup so your plan information is ready when you need support.",
  },
  {
    number: "03",
    title: "Submit Your Issue",
    text:
      "If a CDL-related concern, citation, or inspection issue occurs, log in to your member portal and submit the relevant details.",
  },
  {
    number: "04",
    title: "Get Support",
    text:
      "Your information can then be reviewed so you can better understand the available next steps and keep the process organized.",
  },
];

export default function PlansPage() {
  return (
    <main className="plans-page">

      {/* HERO */}
      <section className="plans-page-hero">
        <div className="plans-page-hero-inner">
          <span className="plans-page-kicker">
            CDL DEFENSE MEMBERSHIP
          </span>

          <h1>
            PROTECTION DESIGNED
            <span> FOR PROFESSIONAL DRIVERS</span>
          </h1>

          <p>
            A CDL is more than a license — it is how you earn your
            living. CDL Defense memberships are designed to give
            drivers and fleets a reliable place to turn when
            CDL-related concerns, citations, or inspection issues arise.
          </p>

          <a
            href="#plans"
            className="plans-page-hero-button"
          >
            VIEW MEMBERSHIP PLANS
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* EXISTING PLAN COMPONENT */}
      <Plans />

      {/* WHAT MEMBERSHIP DOES */}
      <section className="plans-page-protection">
        <div className="plans-page-container">

          <div className="plans-page-section-heading">
            <span>
              WHAT YOUR MEMBERSHIP HELPS WITH
            </span>

            <h2>
              MORE THAN A PLAN
              <strong> — SUPPORT FOR YOUR CDL CAREER</strong>
            </h2>

            <p>
              CDL Defense is built around one goal: helping professional
              drivers stay prepared when issues arise that may affect
              their license, record, or career.
            </p>
          </div>

          <div className="plans-page-benefits-grid">
            {protectionItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="plans-page-benefit-card"
                  key={item.title}
                >
                  <div className="plans-page-benefit-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="plans-page-process">
        <div className="plans-page-container">

          <div className="plans-page-section-heading">
            <span>HOW IT WORKS</span>

            <h2>
              SIMPLE SUPPORT
              <strong> WHEN YOU NEED IT</strong>
            </h2>
          </div>

          <div className="plans-page-steps">
            {steps.map((step) => (
              <article
                className="plans-page-step"
                key={step.number}
              >
                <span className="plans-page-step-number">
                  {step.number}
                </span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PLAN EXPLANATION */}
      <section className="plans-page-types">
        <div className="plans-page-container">

          <div className="plans-page-types-grid">

            <article className="plans-page-type-card fleet">
              <Truck size={28} />

              <span>FOR FLEETS</span>

              <h2>Fleet Plan</h2>

              <p>
                Designed for businesses managing commercial drivers.
                The Fleet Plan provides membership coverage for the
                included drivers while giving the business a more
                organized way to provide CDL support across its team.
              </p>

              <ul>
                <li>
                  <CheckCircle2 size={16} />
                  Coverage for 2 drivers
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  CDL-related support
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  DOT inspection support
                </li>
              </ul>

              <Link to="/plans?plan=fleet">
                CHOOSE FLEET PLAN
                <ArrowRight size={16} />
              </Link>
            </article>

            <article className="plans-page-type-card individual">
              <UserRound size={28} />

              <span>FOR INDEPENDENT DRIVERS</span>

              <h2>Individual Plan</h2>

              <p>
                Built for owner-operators and individual commercial
                drivers who want direct membership support when
                CDL-related concerns, citations, or inspection issues
                occur.
              </p>

              <ul>
                <li>
                  <CheckCircle2 size={16} />
                  Coverage for 1 driver
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  CDL protection support
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  DOT inspection support
                </li>
              </ul>

              <Link to="/plans?plan=individual">
                CHOOSE INDIVIDUAL PLAN
                <ArrowRight size={16} />
              </Link>
            </article>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="plans-page-final-cta">
        <div className="plans-page-container">
          <ShieldCheck size={29} />

          <span>PROTECT WHAT KEEPS YOU MOVING</span>

          <h2>
            YOUR CDL. YOUR LIVELIHOOD.
            <strong> OUR COMMITMENT.</strong>
          </h2>

          <p>
            Choose the plan that fits your driving career and have a
            support system ready before an issue happens.
          </p>

          <a href="#plans">
            VIEW PLANS
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

    </main>
  );
}