
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  Crown,
  ShieldCheck,
  Truck,
  UserRound,
} from "lucide-react";
import "../../style/Plans.css";

const plans = [
  {
    name: "Fleet Plan",
    price: "42",
    cents: "99",
    description: "Protection for your fleet",
    icon: Truck,
    popular: true,
    type: "fleet",
    features: [
      "2 drivers covered",
      "DOT inspection protection",
      "ELD compliance support",
      "Industry-leading fuel discounts",
      "Comprehensive CDL protection",
    ],
  },
  {
    name: "Individual Plan",
    price: "49",
    cents: "99",
    description: "Protection for independent drivers",
    icon: UserRound,
    popular: false,
    type: "individual",
    features: [
      "1 driver covered",
      "Full CDL protection",
      "ELD compliance support",
      "DOT inspection protection",
      "Market-leading fuel discounts",
    ],
  },
];

export default function Plans() {
  return (
    <section className="plans-section" id="plans">
      <div className="plans-container">

        <div className="plans-heading">
          <span className="plans-kicker">
            CDL DEFENSE MEMBERSHIP
          </span>

          <h2>
            FIND THE RIGHT PLAN
            <span> FOR YOUR JOURNEY</span>
          </h2>

          <div className="plans-divider">
            <span />
            <b>✦</b>
            <span />
          </div>

          <p>
            Your CDL is more than a license.
            It's your livelihood. At CDL Defense,
            we offer protection plans designed
            for independent drivers and fleets.
            Choose the coverage that fits your needs
            and drive with greater confidence.
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                key={plan.type}
                className={`plan-card plan-${plan.type}`}
              >
                {plan.popular && (
                  <div className="plan-popular">
                    <Crown size={15} />
                    MOST POPULAR
                  </div>
                )}

                <div className="plan-card-header">
                  <div className="plan-icon">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  <h3>{plan.name}</h3>

                  <p>{plan.description}</p>
                </div>

                <div className="plan-card-body">

                  <div className="plan-price">
                    <div className="plan-price-amount">
                      <span className="plan-currency">
                        $
                      </span>

                      <span className="plan-number">
                        {plan.price}
                      </span>

                      <span className="plan-cents">
                        .{plan.cents}
                      </span>
                    </div>

                    <span className="plan-period">
                      PER MONTH
                    </span>
                  </div>

                  <div className="plan-rule" />

                  <ul className="plan-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <span className="plan-check">
                          <Check size={15} strokeWidth={3} />
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="plan-card-footer">
                    <Link
                      to={`/plans?plan=${plan.type}`}
                      className="plan-button"
                    >
                      GET STARTED
                      <ArrowUpRight size={18} />
                    </Link>

                    <p>
                      <ShieldCheck size={15} />
                      Protect your CDL today
                    </p>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        <p className="plans-bottom-note">
          YOUR CAREER. YOUR LIVELIHOOD.
          <span> OUR COMMITMENT.</span>
        </p>

      </div>
    </section>
  );
}
