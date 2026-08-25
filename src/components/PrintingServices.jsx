import {
  ArrowUpRight,
  Check,
  FileImage,
  Layers,
  Printer,
  ScanLine,
  Settings2,
  Sparkles,
} from "lucide-react";

import "../styles/printingServices.css";

const printingServices = [
  {
    icon: FileImage,
    title: "Flex Printing",
    hindi: "फ्लेक्स प्रिंटिंग",
    description:
      "Campaign posters, banners और large promotional materials के लिए.",
  },
  {
    icon: Layers,
    title: "Star Flex",
    hindi: "स्टार फ्लेक्स",
    description:
      "High-visibility campaign banners और promotional displays.",
  },
  {
    icon: ScanLine,
    title: "Vinyl Printing",
    hindi: "विनाइल प्रिंटिंग",
    description:
      "Smooth और durable vinyl based campaign printing.",
  },
  {
    icon: Layers,
    title: "Sunboard Printing",
    hindi: "सनबोर्ड प्रिंटिंग",
    description:
      "Boards, signage और campaign display requirements के लिए.",
  },
  {
    icon: Sparkles,
    title: "Eco-Solvent Printing",
    hindi: "इको-सॉल्वेंट प्रिंटिंग",
    description:
      "Outdoor campaign graphics और long-lasting print applications.",
  },
  {
    icon: Settings2,
    title: "UV Printing",
    hindi: "यूवी प्रिंटिंग",
    description:
      "High-quality detailed printing requirements के लिए.",
  },
  {
    icon: Printer,
    title: "Digital Printing",
    hindi: "डिजिटल प्रिंटिंग",
    description:
      "Short-run और fast campaign printing requirements के लिए.",
  },
  {
    icon: FileImage,
    title: "Offset Printing",
    hindi: "ऑफसेट प्रिंटिंग",
    description:
      "Pamphlets, handbills और bulk printed materials के लिए.",
  },
  {
    icon: Settings2,
    title: "Screen Printing",
    hindi: "स्क्रीन प्रिंटिंग",
    description:
      "Selected campaign merchandise और promotional applications.",
  },
  {
    icon: ScanLine,
    title: "Large-Format Printing",
    hindi: "लार्ज-फॉर्मेट प्रिंटिंग",
    description:
      "Large banners, hoardings और campaign display materials.",
  },
];

const printingFeatures = [
  "Campaign Posters",
  "Flex & Banners",
  "Pamphlets & Handbills",
  "Hoardings & Boards",
  "Outdoor Branding",
  "Large Format Materials",
];

export default function PrintingServices() {
  return (
    <section
      id="printing-services"
      className="printing-section"
    >
      <div className="printing-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="printing-header">

          <div className="section-label">
            Printing Services
          </div>

          <h2>
            Campaign की
            <span>
              हर Printing Requirement.
            </span>
          </h2>

          <p>
            Campaign requirements के लिए अलग-अलग printing
            formats — flex, vinyl, sunboard, digital,
            offset और large-format printing तक।
          </p>

        </div>


        {/* =====================================================
            FEATURE
        ===================================================== */}

        <div className="printing-feature">

          <div className="printing-feature-content">

            <span className="printing-feature-label">
              PROFESSIONAL PRINTING
            </span>

            <h3>
              सही Print,
              <span>
                सही Impact.
              </span>
            </h3>

            <p>
              Campaign में posters, banners, pamphlets,
              boards और outdoor promotional materials की
              quality और presentation महत्वपूर्ण होती है।
              आवश्यकता के अनुसार अलग-अलग printing solutions
              उपलब्ध कराए जा सकते हैं।
            </p>


            <div className="printing-feature-points">

              <div>
                <Check size={14} />
                Quality Printing
              </div>

              <div>
                <Check size={14} />
                Multiple Formats
              </div>

              <div>
                <Check size={14} />
                Campaign Ready
              </div>

            </div>

          </div>


          {/* =================================================
              VISUAL
          ================================================= */}

          <div className="printing-feature-visual">

            <div className="printing-paper printing-paper-one">
              <span>FLEX</span>
            </div>

            <div className="printing-paper printing-paper-two">
              <span>PRINT</span>
            </div>

            <div className="printing-paper printing-paper-three">

              <div className="printing-paper-top">
                <span>
                  ELECTION
                </span>

                <small>
                  PRINTING
                </small>
              </div>

              <div className="printing-paper-main">

                <Printer size={30} />

                <strong>
                  Campaign
                </strong>

                <span>
                  Printing Solutions
                </span>

              </div>

              <div className="printing-paper-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            SERVICE HEADING
        ===================================================== */}

        <div className="printing-services-heading">

          <span>
            PRINTING SOLUTIONS
          </span>

          <h3>
            Complete
            <strong>
              Printing Services
            </strong>
          </h3>

        </div>


        {/* =====================================================
            SERVICE GRID
        ===================================================== */}

        <div className="printing-grid">

          {printingServices.map((service, index) => {

            const Icon = service.icon;

            return (
              <article
                className="printing-card"
                key={service.title}
              >

                <div className="printing-card-top">

                  <span className="printing-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="printing-icon">
                    <Icon size={18} />
                  </div>

                </div>


                <h4>
                  {service.title}
                </h4>

                <div className="printing-hindi">
                  {service.hindi}
                </div>

                <p>
                  {service.description}
                </p>


                <a
                  href="#contact"
                  className="printing-card-link"
                >
                  Printing Enquiry
                  <ArrowUpRight size={14} />
                </a>

              </article>
            );
          })}

        </div>


        {/* =====================================================
            MATERIALS
        ===================================================== */}

        <div className="printing-materials">

          <div className="printing-materials-heading">

            <span>
              CAMPAIGN PRINT MATERIALS
            </span>

            <h3>
              आपके Campaign के लिए
              <strong>
                आवश्यक Print Materials
              </strong>
            </h3>

          </div>


          <div className="printing-material-list">

            {printingFeatures.map((item) => (

              <div
                key={item}
                className="printing-material-item"
              >
                <span>
                  <Check size={12} />
                </span>

                {item}
              </div>

            ))}

          </div>

        </div>


        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="printing-cta">

          <div>

            <span>
              PRINTING SUPPORT
            </span>

            <h3>
              Campaign Materials को
              <strong>
                Professional Print दें।
              </strong>
            </h3>

            <p>
              अपनी campaign requirement के अनुसार
              printing format और material की planning
              की जा सकती है।
            </p>

          </div>


          <a
            href="https://wa.me/919820280493"
            target="_blank"
            rel="noreferrer"
            className="printing-cta-btn"
          >
            Printing Enquiry
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </section>
  );
}