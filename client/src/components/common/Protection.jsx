import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";
import "../../style/Protection.css";

const services = [
  {
    number: "01",
    label: "YOUR CAREER, OUR COMMITMENT",
    title: "CDL PROTECTION",
    image: "/images/cld-optimized.jpg",
    alt: "CDL protection and commercial trucking",
    Icon: ShieldCheck,
    description: [
      "Your Commercial Driver's License is more than a credential — it is the foundation of your livelihood. Traffic citations, license-related concerns, and other driving issues can create unnecessary risk for your career if they are not handled properly.",

      "CDL Defense gives professional drivers a dependable place to turn when a CDL-related issue occurs. Our membership support helps you organize case information, understand the next steps, and access the assistance available through your plan so you can spend less time worrying about paperwork and more time on the road.",
    ],
  },

  {
    number: "02",
    label: "ROADSIDE & COMPLIANCE SUPPORT",
    title: "DOT INSPECTION SUPPORT",
    image: "/images/eld-optimized.jpg",
    alt: "Commercial truck undergoing a roadside DOT inspection",
    Icon: FileCheck2,
    description: [
      "DOT inspections are a routine part of commercial driving, but inspection reports, violations, and compliance concerns can quickly become stressful. CDL Defense helps drivers understand inspection-related issues and gives them a clear path forward when questions or problems arise.",

      "From reviewing inspection concerns to helping you organize the information needed for your case, our support is designed to make the process easier to understand. Whether you drive independently or operate as part of a fleet, CDL Defense helps you stay informed, prepared, and focused on keeping your career moving.",
    ],
  },
];

export default function Protection() {
  return (
    <section
      className="protection-section"
      id="protection"
    >
      <div className="protection-container">

        <div className="protection-header">
          <span className="protection-kicker">
            PROTECTION THAT MOVES WITH YOU
          </span>

          <h2>
            BUILT FOR DRIVERS
            <span> BACKED BY CDL DEFENSE</span>
          </h2>

          <div className="protection-divider">
            <span />
            <b>✦</b>
            <span />
          </div>
        </div>

        <div className="protection-services">
          {services.map((service, index) => {
            const Icon = service.Icon;

            return (
              <article
                className={`protection-row ${
                  index % 2 === 1
                    ? "protection-row-reverse"
                    : ""
                }`}
                key={service.number}
              >
                <div className="protection-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="protection-image"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="protection-image-label">
                    <Icon size={17} />
                    <span>CDL DEFENSE</span>
                  </div>
                </div>

                <div className="protection-content">
                  <div className="protection-content-inner">

                    <div className="protection-label">
                      <span className="protection-label-line" />
                      {service.label}
                    </div>

                    <h3>{service.title}</h3>

                    <div className="protection-small-divider">
                      <span />
                      <b>✦</b>
                    </div>

                    {service.description.map((text) => (
                      <p key={text}>
                        {text}
                      </p>
                    ))}

                    <Link
                      to="/plans"
                      className="protection-button"
                    >
                      SEE PLANS
                      <ArrowUpRight size={17} />
                    </Link>

                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}