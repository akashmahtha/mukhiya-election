import {
  ArrowUpRight,
  Armchair,
  BadgeCheck,
  Camera,
  Car,
  DoorOpen,
  Fan,
  Flag,
  Lightbulb,
  Mic2,
  Monitor,
  Presentation,
  Shield,
  Sofa,
  Speaker,
  Tent,
  Users,
  Video,
  Volume2,
  Waves,
  Zap,
} from "lucide-react";

import "../styles/eventManagement.css";

const eventServices = [
  {
    icon: Presentation,
    title: "Stage",
    hindi: "मंच व्यवस्था",
    description:
      "छोटी बैठक से लेकर बड़ी सभा तक आवश्यक stage arrangement.",
  },
  {
    icon: Flag,
    title: "Backdrop",
    hindi: "स्टेज बैकड्रॉप",
    description:
      "Campaign branding और event requirement के अनुसार backdrop.",
  },
  {
    icon: Mic2,
    title: "Podium",
    hindi: "पोडियम",
    description:
      "Speech और public meeting के लिए podium arrangement.",
  },
  {
    icon: Armchair,
    title: "Chairs",
    hindi: "कुर्सियां",
    description:
      "कार्यक्रम के scope के अनुसार seating arrangement.",
  },
  {
    icon: Sofa,
    title: "Tables & Sofa",
    hindi: "टेबल एवं सोफा",
    description:
      "Stage और event area के लिए furniture arrangement.",
  },
  {
    icon: Tent,
    title: "Tent / Pandal",
    hindi: "टेंट / पंडाल",
    description:
      "Outdoor meetings और events के लिए tent एवं pandal support.",
  },
  {
    icon: Tent,
    title: "German Hanger",
    hindi: "जर्मन हैंगर",
    description:
      "बड़े outdoor events के लिए covered event infrastructure.",
  },
  {
    icon: Volume2,
    title: "Sound System",
    hindi: "साउंड सिस्टम",
    description:
      "Meeting और public event के लिए professional sound arrangement.",
  },
  {
    icon: Monitor,
    title: "LED Screen",
    hindi: "एलईडी स्क्रीन",
    description:
      "Event content, video और campaign visuals के लिए LED display.",
  },
  {
    icon: Lightbulb,
    title: "Lighting",
    hindi: "लाइटिंग",
    description:
      "Event area और stage के लिए lighting arrangement.",
  },
  {
    icon: Zap,
    title: "Generator",
    hindi: "जनरेटर",
    description:
      "Event equipment के लिए power backup arrangement.",
  },
  {
    icon: Fan,
    title: "Fans",
    hindi: "फैन व्यवस्था",
    description:
      "Outdoor एवं covered events के लिए आवश्यक fan support.",
  },
  {
    icon: Shield,
    title: "Barricading",
    hindi: "बैरिकेडिंग",
    description:
      "Event area के लिए आवश्यक barricading arrangement.",
  },
  {
    icon: DoorOpen,
    title: "Entry Gate",
    hindi: "प्रवेश द्वार",
    description:
      "Event venue के लिए entry एवं access arrangement.",
  },
  {
    icon: Flag,
    title: "Welcome Gate",
    hindi: "स्वागत द्वार",
    description:
      "Campaign branding के साथ welcome gate setup.",
  },
  {
    icon: BadgeCheck,
    title: "Signage",
    hindi: "साइनेज",
    description:
      "Event venue के लिए information और branding signage.",
  },
  {
    icon: Flag,
    title: "Direction Boards",
    hindi: "दिशा संकेत बोर्ड",
    description:
      "Venue और entry points के लिए direction boards.",
  },
  {
    icon: Waves,
    title: "Drinking Water",
    hindi: "पेयजल व्यवस्था",
    description:
      "कार्यक्रम के scope के अनुसार drinking water arrangement.",
  },
  {
    icon: Camera,
    title: "Photography",
    hindi: "फोटोग्राफी",
    description:
      "Event और campaign activities की professional photography.",
  },
  {
    icon: Video,
    title: "Videography",
    hindi: "वीडियोग्राफी",
    description:
      "Event coverage और campaign documentation के लिए video support.",
  },
];

const eventCategories = [
  {
    number: "01",
    title: "Small Meeting",
    hindi: "छोटी बैठक",
    icon: Users,
  },
  {
    number: "02",
    title: "Public Meeting",
    hindi: "जनसभा",
    icon: Mic2,
  },
  {
    number: "03",
    title: "Campaign Event",
    hindi: "चुनावी कार्यक्रम",
    icon: Presentation,
  },
  {
    number: "04",
    title: "Roadshow Event",
    hindi: "रोडशो कार्यक्रम",
    icon: Car,
  },
];

export default function EventManagement() {
  return (
    <section
      id="event-management"
      className="event-management-section"
    >
      <div className="event-management-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="event-management-header">

          <div className="section-label">
            Event Management
          </div>

          <h2>
            सभा एवं कार्यक्रम
            <span>
              Management
            </span>
          </h2>

          <p>
            छोटी बैठक से लेकर बड़ी सभा तक campaign events
            के लिए आवश्यक event infrastructure और
            coordination support एक ही जगह।
          </p>

        </div>


        {/* =====================================================
            FEATURE
        ===================================================== */}

        <div className="event-management-feature">

          <div className="event-management-feature-content">

            <span className="event-feature-label">
              COMPLETE EVENT SUPPORT
            </span>

            <h3>
              एक Event के लिए
              <span>
                सब कुछ तैयार।
              </span>
            </h3>

            <p>
              Stage, backdrop, sound, LED, lighting,
              seating, generator, barricading, signage और
              event branding जैसी आवश्यक व्यवस्थाएं
              project scope के अनुसार उपलब्ध कराई जा सकती हैं।
            </p>


            <div className="event-feature-points">

              <div>
                <Presentation size={14} />
                Stage & Backdrop
              </div>

              <div>
                <Speaker size={14} />
                Sound & LED
              </div>

              <div>
                <Users size={14} />
                Seating & Event Setup
              </div>

            </div>


            <a
              href="#contact"
              className="event-feature-btn"
            >
              Event Enquiry
              <ArrowUpRight size={16} />
            </a>

          </div>


          {/* =================================================
              VISUAL
          ================================================= */}

          <div className="event-management-feature-visual">

            <div className="event-visual-glow"></div>

            <div className="event-visual-circle event-circle-one"></div>

            <div className="event-visual-circle event-circle-two"></div>


            <div className="event-stage-card">

              <div className="event-stage-top">

                <span>
                  CAMPAIGN EVENT
                </span>

                <BadgeCheck size={15} />

              </div>


              <div className="event-stage-screen">

                <div className="event-stage-screen-content">

                  <small>
                    ELECTION
                  </small>

                  <strong>
                    EVENT
                  </strong>

                  <span>
                    MANAGEMENT
                  </span>

                </div>

              </div>


              <div className="event-stage-elements">

                <div className="event-stage-chair"></div>

                <div className="event-stage-chair"></div>

                <div className="event-stage-podium">
                  <Mic2 size={13} />
                </div>

              </div>


              <div className="event-stage-base"></div>

            </div>

          </div>

        </div>


        {/* =====================================================
            EVENT TYPES
        ===================================================== */}

        <div className="event-types">

          {eventCategories.map((category) => {

            const Icon = category.icon;

            return (
              <div
                className="event-type-card"
                key={category.number}
              >

                <span className="event-type-number">
                  {category.number}
                </span>

                <div className="event-type-icon">
                  <Icon size={18} />
                </div>

                <div>
                  <strong>
                    {category.title}
                  </strong>

                  <span>
                    {category.hindi}
                  </span>
                </div>

              </div>
            );

          })}

        </div>


        {/* =====================================================
            SERVICES HEADING
        ===================================================== */}

        <div className="event-services-heading">

          <span>
            EVENT INFRASTRUCTURE
          </span>

          <h3>
            Complete
            <strong>
              Event Requirements
            </strong>
          </h3>

        </div>


        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div className="event-services-grid">

          {eventServices.map((service, index) => {

            const Icon = service.icon;

            return (
              <article
                className="event-service-card"
                key={service.title}
              >

                <div className="event-service-top">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="event-service-icon">
                    <Icon size={18} />
                  </div>

                </div>


                <h4>
                  {service.title}
                </h4>

                <div className="event-service-hindi">
                  {service.hindi}
                </div>

                <p>
                  {service.description}
                </p>


                <a
                  href="#contact"
                  className="event-service-link"
                >
                  Enquiry
                  <ArrowUpRight size={14} />
                </a>

              </article>
            );

          })}

        </div>


        {/* =====================================================
            EVENT FLOW
        ===================================================== */}

        <div className="event-flow">

          <div className="event-flow-heading">

            <span>
              EVENT EXECUTION
            </span>

            <h3>
              Requirement से
              <strong>
                Event Setup तक।
              </strong>
            </h3>

            <p>
              आपके event के scope और requirements के अनुसार
              आवश्यक infrastructure और coordination तय किया
              जा सकता है।
            </p>

          </div>


          <div className="event-flow-steps">

            <div className="event-flow-step">

              <div className="event-flow-icon">
                <Settings2Icon />
              </div>

              <strong>
                PLAN
              </strong>

              <small>
                Requirement Planning
              </small>

            </div>


            <div className="event-flow-arrow">
              →
            </div>


            <div className="event-flow-step">

              <div className="event-flow-icon">
                <TruckIcon />
              </div>

              <strong>
                ARRANGE
              </strong>

              <small>
                Infrastructure Setup
              </small>

            </div>


            <div className="event-flow-arrow">
              →
            </div>


            <div className="event-flow-step">

              <div className="event-flow-icon">
                <CheckIcon />
              </div>

              <strong>
                EXECUTE
              </strong>

              <small>
                Event Coordination
              </small>

            </div>

          </div>

        </div>


        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="event-management-cta">

          <div>

            <span>
              EVENT MANAGEMENT SUPPORT
            </span>

            <h3>
              आपका Event,
              <strong>
                हमारी व्यवस्था।
              </strong>
            </h3>

            <p>
              Stage, sound, LED, seating, lighting,
              branding और event infrastructure के लिए
              enquiry करें।
            </p>

          </div>


          <a
            href="https://wa.me/919820280493"
            target="_blank"
            rel="noreferrer"
            className="event-management-cta-btn"
          >
            Event Enquiry
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </section>
  );
}


/* =====================================================
   SMALL INLINE ICONS
===================================================== */

function Settings2Icon() {
  return (
    <span className="event-custom-icon">
      ⚙
    </span>
  );
}

function TruckIcon() {
  return (
    <span className="event-custom-icon">
      🚚
    </span>
  );
}

function CheckIcon() {
  return (
    <span className="event-custom-icon">
      ✓
    </span>
  );
}