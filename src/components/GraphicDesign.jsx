import {
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  FileImage,
  Image,
  LayoutTemplate,
  MessageCircle,
  MonitorPlay,
  Palette,
  PenTool,
  Presentation,
  Smartphone,
  Ticket,
} from "lucide-react";

import "../styles/graphicDesign.css";

const designServices = [
  {
    icon: FileImage,
    title: "Candidate Poster",
    hindi: "उम्मीदवार पोस्टर",
  },
  {
    icon: Image,
    title: "Election Poster",
    hindi: "चुनावी पोस्टर",
  },
  {
    icon: LayoutTemplate,
    title: "Banner Design",
    hindi: "बैनर डिजाइन",
  },
  {
    icon: Palette,
    title: "Flex Design",
    hindi: "फ्लेक्स डिजाइन",
  },
  {
    icon: FileImage,
    title: "Pamphlet Design",
    hindi: "पंपलेट डिजाइन",
  },
  {
    icon: PenTool,
    title: "Handbill Design",
    hindi: "हैंडबिल डिजाइन",
  },
  {
    icon: Smartphone,
    title: "Social Media Post",
    hindi: "सोशल मीडिया पोस्ट",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Poster",
    hindi: "व्हाट्सएप पोस्टर",
  },
  {
    icon: Presentation,
    title: "Hoarding Design",
    hindi: "होर्डिंग डिजाइन",
  },
  {
    icon: LayoutTemplate,
    title: "Stage Backdrop",
    hindi: "स्टेज बैकड्रॉप",
  },
  {
    icon: MonitorPlay,
    title: "LED Screen Content",
    hindi: "एलईडी स्क्रीन कंटेंट",
  },
  {
    icon: FileImage,
    title: "Video Thumbnail",
    hindi: "वीडियो थंबनेल",
  },
  {
    icon: BadgeCheck,
    title: "Campaign Logo / Branding",
    hindi: "कैंपेन लोगो एवं ब्रांडिंग",
  },
  {
    icon: Ticket,
    title: "Event Invitation",
    hindi: "कार्यक्रम निमंत्रण",
  },
  {
    icon: CalendarDays,
    title: "Calendar Design",
    hindi: "चुनावी कैलेंडर डिजाइन",
  },
  {
    icon: LayoutTemplate,
    title: "Campaign Kit Design",
    hindi: "कैंपेन किट डिजाइन",
  },
];

export default function GraphicDesign() {
  return (
    <section
      id="graphic-design"
      className="graphic-section"
    >
      <div className="graphic-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="graphic-header">

          <div className="section-label">
            Graphic Design Services
          </div>

          <h2>
            Campaign की
            <span>
              Professional Designing
            </span>
          </h2>

          <p>
            Campaign के लिए complete creative designing —
            posters, banners, social media creatives,
            hoardings, LED content और branding materials के लिए।
          </p>

        </div>


        {/* =====================================================
            INTRO FEATURE
        ===================================================== */}

        <div className="graphic-feature">

          <div className="graphic-feature-content">

            <span className="graphic-feature-label">
              CREATIVE & DESIGN
            </span>

            <h3>
              आपकी पहचान,
              <span>
                आपके Campaign की Design.
              </span>
            </h3>

            <p>
              उम्मीदवार और campaign की requirements के
              अनुसार अलग-अलग print और digital formats के
              लिए creative designs तैयार किए जा सकते हैं।
            </p>


            <div className="graphic-feature-points">

              <div>
                <PenTool size={14} />
                Creative Design
              </div>

              <div>
                <Palette size={14} />
                Campaign Branding
              </div>

              <div>
                <MonitorPlay size={14} />
                Digital Content
              </div>

            </div>

          </div>


          {/* =================================================
              VISUAL
          ================================================= */}

          <div className="graphic-feature-visual">

            <div className="graphic-shape graphic-shape-one"></div>

            <div className="graphic-shape graphic-shape-two"></div>

            <div className="graphic-design-board">

              <div className="graphic-board-top">
                <span>
                  ELECTION
                </span>

                <small>
                  CREATIVE
                </small>
              </div>

              <div className="graphic-board-content">

                <div className="graphic-board-avatar">
                  <Image size={28} />
                </div>

                <strong>
                  Campaign Design
                </strong>

                <span>
                  Poster • Banner • Digital
                </span>

              </div>

              <div className="graphic-board-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            SERVICES HEADER
        ===================================================== */}

        <div className="graphic-services-heading">

          <span>
            DESIGN SERVICES
          </span>

          <h3>
            Complete Campaign
            <strong>
              Creative Designing
            </strong>
          </h3>

        </div>


        {/* =====================================================
            DESIGN GRID
        ===================================================== */}

        <div className="graphic-grid">

          {designServices.map((service, index) => {

            const Icon = service.icon;

            return (
              <article
                className="graphic-card"
                key={service.title}
              >

                <div className="graphic-card-top">

                  <span className="graphic-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="graphic-icon">
                    <Icon size={18} />
                  </div>

                </div>


                <h4>
                  {service.title}
                </h4>

                <div className="graphic-hindi">
                  {service.hindi}
                </div>


                <div className="graphic-card-line"></div>


                <a
                  href="#contact"
                  className="graphic-card-link"
                >
                  Design Enquiry
                  <ArrowUpRight size={14} />
                </a>

              </article>
            );
          })}

        </div>


        {/* =====================================================
            DESIGN FORMATS
        ===================================================== */}

        <div className="graphic-formats">

          <div className="graphic-formats-heading">

            <span>
              DESIGN SUPPORT
            </span>

            <h3>
              Print से लेकर
              <strong>
                Digital तक।
              </strong>
            </h3>

          </div>


          <div className="graphic-format-list">

            <div>
              <span></span>
              Print Campaign Materials
            </div>

            <div>
              <span></span>
              Social Media Creatives
            </div>

            <div>
              <span></span>
              WhatsApp-ready Designs
            </div>

            <div>
              <span></span>
              Event & Program Branding
            </div>

            <div>
              <span></span>
              LED Screen Content
            </div>

            <div>
              <span></span>
              Campaign Branding
            </div>

          </div>

        </div>


        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="graphic-cta">

          <div>

            <span>
              GRAPHIC DESIGN SUPPORT
            </span>

            <h3>
              Campaign को
              <strong>
                Professional Look दें।
              </strong>
            </h3>

            <p>
              आपकी campaign requirement के अनुसार design
              formats और creative requirements तय की जा सकती हैं।
            </p>

          </div>


          <a
            href="https://wa.me/919820280493"
            target="_blank"
            rel="noreferrer"
            className="graphic-cta-btn"
          >
            Design Enquiry
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </section>
  );
}