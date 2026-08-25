import {
  ArrowUpRight,
  BadgeCheck,
  Car,
  ClipboardCheck,
  DoorOpen,
  Flag,
  Lightbulb,
  Mic2,
  Monitor,
  Presentation,
  Radio,
  Users,
  Volume2,
} from "lucide-react";

import "../styles/groundCampaign.css";

const groundServices = [
  {
    icon: DoorOpen,
    title: "Door-to-Door Campaign",
    hindi: "घर-घर संपर्क अभियान",
    description:
      "अधिकृत campaign teams के लिए क्षेत्रवार door-to-door activity coordination.",
  },
  {
    icon: Users,
    title: "Public Contact",
    hindi: "जनसंपर्क कार्यक्रम",
    description:
      "जनसंपर्क कार्यक्रम और local campaign activities का coordination.",
  },
  {
    icon: Mic2,
    title: "Nukkad Sabha",
    hindi: "नुक्कड़ सभा",
    description:
      "स्थानीय स्तर की छोटी सभा और public activity coordination.",
  },
  {
    icon: Presentation,
    title: "Small Meeting",
    hindi: "छोटी सभा",
    description:
      "छोटी meetings के लिए आवश्यक basic event support.",
  },
  {
    icon: Users,
    title: "Public Meeting",
    hindi: "जनसभा",
    description:
      "जनसभा के लिए event coordination और आवश्यक infrastructure support.",
  },
  {
    icon: Car,
    title: "Roadshow Coordination",
    hindi: "रोडशो प्रबंधन",
    description:
      "Campaign roadshow के लिए vehicle और activity coordination.",
  },
  {
    icon: BadgeCheck,
    title: "Volunteer Coordination",
    hindi: "कार्यकर्ता समन्वय",
    description:
      "Authorized campaign volunteers के coordination में operational support.",
  },
  {
    icon: ClipboardCheck,
    title: "Event Management",
    hindi: "कार्यक्रम प्रबंधन",
    description:
      "Campaign meetings और events की planning एवं execution support.",
  },
];

const eventSupport = [
  {
    icon: Presentation,
    title: "Stage Arrangement",
  },
  {
    icon: Volume2,
    title: "Sound Arrangement",
  },
  {
    icon: Monitor,
    title: "LED Screen",
  },
  {
    icon: Radio,
    title: "Generator",
  },
  {
    icon: Lightbulb,
    title: "Lighting",
  },
  {
    icon: Users,
    title: "Seating",
  },
  {
    icon: Flag,
    title: "Barricading",
  },
  {
    icon: BadgeCheck,
    title: "Event Branding",
  },
];

export default function GroundCampaign() {
  return (
    <section
      id="ground-campaign"
      className="ground-section"
    >
      <div className="ground-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="ground-header">

          <div className="section-label">
            Ground Campaign Support
          </div>

          <h2>
            Campaign को
            <span>
              Ground पर मजबूत बनाएं।
            </span>
          </h2>

          <p>
            अधिकृत campaign teams के लिए जनसंपर्क,
            meetings, roadshows, volunteer coordination
            और event infrastructure का operational support.
          </p>

        </div>


        {/* =====================================================
            FEATURE
        ===================================================== */}

        <div className="ground-feature">

          <div className="ground-feature-content">

            <span className="ground-feature-label">
              GROUND CAMPAIGN SUPPORT
            </span>

            <h3>
              Planning से
              <span>
                Ground Execution तक।
              </span>
            </h3>

            <p>
              Campaign को व्यवस्थित तरीके से संचालित करने
              के लिए ground-level activities की planning,
              coordination और event support उपलब्ध कराया
              जा सकता है।
            </p>


            <div className="ground-feature-points">

              <div>
                <Users size={14} />
                Team Coordination
              </div>

              <div>
                <Car size={14} />
                Roadshow Support
              </div>

              <div>
                <Mic2 size={14} />
                Public Events
              </div>

            </div>

          </div>


          {/* =================================================
              VISUAL
          ================================================= */}

          <div className="ground-feature-visual">

            <div className="ground-grid-lines"></div>

            <div className="ground-location-card">

              <div className="ground-location-top">

                <span>
                  CAMPAIGN
                </span>

                <BadgeCheck size={16} />

              </div>

              <div className="ground-map">

                <div className="ground-route route-one"></div>

                <div className="ground-route route-two"></div>

                <div className="ground-route route-three"></div>

                <div className="ground-pin pin-one"></div>
                <div className="ground-pin pin-two"></div>
                <div className="ground-pin pin-three"></div>

              </div>

              <div className="ground-location-bottom">

                <strong>
                  Ground Support
                </strong>

                <span>
                  Plan • Coordinate • Execute
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            SERVICES HEADING
        ===================================================== */}

        <div className="ground-services-heading">

          <span>
            GROUND SERVICES
          </span>

          <h3>
            Complete
            <strong>
              Campaign Support
            </strong>
          </h3>

        </div>


        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div className="ground-grid">

          {groundServices.map((service, index) => {

            const Icon = service.icon;

            return (
              <article
                className="ground-card"
                key={service.title}
              >

                <div className="ground-card-top">

                  <span className="ground-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="ground-icon">
                    <Icon size={18} />
                  </div>

                </div>

                <h4>
                  {service.title}
                </h4>

                <div className="ground-hindi">
                  {service.hindi}
                </div>

                <p>
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="ground-card-link"
                >
                  Enquiry
                  <ArrowUpRight size={14} />
                </a>

              </article>
            );
          })}

        </div>


        {/* =====================================================
            EVENT INFRASTRUCTURE
        ===================================================== */}

        <div className="ground-event-block">

          <div className="ground-event-heading">

            <span>
              EVENT INFRASTRUCTURE
            </span>

            <h3>
              कार्यक्रम के लिए
              <strong>
                आवश्यक व्यवस्था
              </strong>
            </h3>

            <p>
              Meeting, public event और campaign activities
              के scope के अनुसार आवश्यक event infrastructure
              की व्यवस्था की जा सकती है।
            </p>

          </div>


          <div className="ground-event-grid">

            {eventSupport.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  className="ground-event-item"
                  key={item.title}
                >

                  <div className="ground-event-icon">
                    <Icon size={17} />
                  </div>

                  <span>
                    {item.title}
                  </span>

                </div>
              );
            })}

          </div>

        </div>


        {/* =====================================================
            OPERATION FLOW
        ===================================================== */}

        <div className="ground-flow">

          <div className="ground-flow-heading">

            <span>
              CAMPAIGN EXECUTION FLOW
            </span>

            <h3>
              व्यवस्थित Campaign,
              <strong>
                बेहतर Coordination.
              </strong>
            </h3>

          </div>


          <div className="ground-flow-items">

            <div className="ground-flow-item">

              <span>01</span>

              <strong>
                PLAN
              </strong>

              <small>
                Activity Planning
              </small>

            </div>

            <div className="ground-flow-arrow">
              →
            </div>

            <div className="ground-flow-item">

              <span>02</span>

              <strong>
                COORDINATE
              </strong>

              <small>
                Team & Event Coordination
              </small>

            </div>

            <div className="ground-flow-arrow">
              →
            </div>

            <div className="ground-flow-item">

              <span>03</span>

              <strong>
                EXECUTE
              </strong>

              <small>
                Ground Activity Support
              </small>

            </div>

          </div>

        </div>


        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="ground-cta">

          <div>

            <span>
              GROUND CAMPAIGN SUPPORT
            </span>

            <h3>
              Campaign की
              <strong>
                Ground Planning करें।
              </strong>
            </h3>

            <p>
              जनसंपर्क, meetings, roadshows और events के लिए
              operational support requirements पर चर्चा करें।
            </p>

          </div>

          <a
            href="https://wa.me/919820280493"
            target="_blank"
            rel="noreferrer"
            className="ground-cta-btn"
          >
            Ground Enquiry
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </section>
  );
}