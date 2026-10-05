
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, FileCheck2 } from "lucide-react";
import "../../style/Protection.css";

const services = [
  {
    number: "01",
    label: "COMPLIANCE & SUPPORT",
    title: "ELD PROTECTION",
    image: "/images/eld-optimized.jpg",
    alt: "Commercial truck undergoing a roadside inspection",
    Icon: FileCheck2,
    description: [
      "Staying compliant with Electronic Logging Device (ELD) regulations is essential for every commercial driver. At CDL Defense, we understand the challenges of managing electronic logs, maintaining accurate records, and keeping up with changing regulatory requirements.",

      "Our ELD protection services are designed to help drivers navigate compliance-related concerns, understand FMCSA requirements, and address issues involving electronic logging devices. We provide guidance and dedicated support to help you avoid preventable violations and stay focused on the road.",
    ],
  },
  {
    number: "02",
    label: "YOUR CAREER, OUR COMMITMENT",
    title: "CDL PROTECTION",
    image: "/images/cld-optimized.jpg",
    alt: "CDL protection and commercial trucking",
    Icon: ShieldCheck,
    description: [
      "Your Commercial Driver's License is the foundation of your career. A traffic violation, license-related issue, or regulatory concern can put your livelihood at risk. CDL Defense is committed to helping professional drivers navigate these challenges with confidence.",

      "Our CDL protection services provide assistance with CDL-related concerns, traffic violations, and regulatory matters within the scope of your membership. Whether you're an independent driver or part of a fleet, our goal is to help you protect your career and keep moving forward.",
    ],
  },
];

export default function Protection() {
  return (
    <section className="protection-section" id="protection">
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
                      <p key={text}>{text}</p>
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
