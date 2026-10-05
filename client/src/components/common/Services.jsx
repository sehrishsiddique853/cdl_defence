
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import "../../style/Services.css";

const services = [
  {
    title: "CDL Protection",
    description:
      "Support for CDL-related violations and concerns that may affect your driving career.",
  },
  {
    title: "DOT Inspection Support",
    description:
      "Guidance to help drivers address inspection-related issues and understand compliance requirements.",
  },
  {
    title: "ELD Compliance Assistance",
    description:
      "Support with electronic logging requirements, recordkeeping, and ELD-related concerns.",
  },
  {
    title: "Fuel Discounts",
    description:
      "Access to fuel-saving benefits designed to help drivers and fleet operators reduce operating costs.",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="services-heading">
          <span className="services-kicker">
            THE CDL DEFENSE ADVANTAGE
          </span>

          <h2>
            WHAT WE OFFER
            <span>
              COMPREHENSIVE SERVICES FOR
              DRIVERS AND FLEETS
            </span>
          </h2>

          <div className="services-divider">
            <span />
            <b>✦</b>
            <span />
          </div>

          <p>
            At CDL Defense, we provide solutions
            tailored to the needs of independent
            commercial drivers and fleet operators.
            Our membership plans are designed to
            support your career, simplify compliance,
            and help keep you moving forward.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <div
              className="services-item"
              key={service.title}
            >
              <div className="services-check">
                <Check size={17} strokeWidth={2.5} />
              </div>

              <p>
                <strong>{service.title}</strong>
                {" — "}
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="services-action">
          <Link
            to="/plans"
            className="services-button"
          >
            SEE PLANS & PRICING
            <ArrowUpRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}

