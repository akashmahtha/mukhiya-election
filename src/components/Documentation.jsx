import {
  ArrowUpRight,
  Camera,
  CheckCircle2,
  ClipboardList,
  FileText,
  Image,
  Map,
  NotebookPen,
  PlayCircle,
  Video,
} from "lucide-react";

import "../styles/documentation.css";

const documentationServices = [
  {
    icon: Camera,
    title: "Event Photography",
    hindi: "कार्यक्रम फोटोग्राफी",
    description:
      "सभा, बैठक और campaign events की professional photography.",
  },
  {
    icon: Camera,
    title: "Candidate Photography",
    hindi: "उम्मीदवार फोटोग्राफी",
    description:
      "Candidate profile, campaign और promotional requirements के लिए photography.",
  },
  {
    icon: Map,
    title: "Ground Activity",
    hindi: "ग्राउंड एक्टिविटी",
    description:
      "Ground campaign activities और field events का visual documentation.",
  },
  {
    icon: Video,
    title: "Video Coverage",
    hindi: "वीडियो कवरेज",
    description:
      "Campaign events और activities की video coverage.",
  },
  {
    icon: PlayCircle,
    title: "Short Video Clips",
    hindi: "शॉर्ट वीडियो",
    description:
      "Campaign communication के लिए short-form video clips.",
  },
  {
    icon: PlayCircle,
    title: "Reels",
    hindi: "रील्स",
    description:
      "Social media और digital campaign के लिए short reels.",
  },
  {
    icon: Video,
    title: "Event Highlights",
    hindi: "इवेंट हाइलाइट्स",
    description:
      "कार्यक्रम के प्रमुख moments को highlight format में तैयार करना.",
  },
  {
    icon: Image,
    title: "Campaign Documentation",
    hindi: "अभियान दस्तावेजीकरण",
    description:
      "Campaign activities और events का व्यवस्थित visual record.",
  },
];

const reportingServices = [
  "Daily Activity Report",
  "Event Report",
  "Photo Documentation",
  "Video Documentation",
  "Material Dispatch Report",
  "Campaign Schedule",
  "Expense Documentation Support",
  "Area-wise Activity Report",
  "Team Coordination Report",
];

export default function Documentation() {
  return (
    <section
      id="documentation"
      className="documentation-section"
    >
      <div className="documentation-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="documentation-header">

          <div className="section-label">
            Documentation & Reporting
          </div>

          <h2>
            Campaign को
            <span>
              व्यवस्थित तरीके से Document करें।
            </span>
          </h2>

          <p>
            Photography, videography, event coverage और
            campaign reporting के माध्यम से campaign activities
            का एक organised record तैयार करने में सहायता।
          </p>

        </div>


        {/* =====================================================
            FEATURE
        ===================================================== */}

        <div className="documentation-feature">

          <div className="documentation-feature-content">

            <span className="documentation-feature-label">
              CAMPAIGN DOCUMENTATION
            </span>

            <h3>
              हर Activity का
              <span>
                सही Record।
              </span>
            </h3>

            <p>
              Campaign के दौरान होने वाली meetings, events,
              ground activities और promotional activities को
              photo, video और reports के माध्यम से व्यवस्थित
              किया जा सकता है।
            </p>


            <div className="documentation-points">

              <div>
                <Camera size={14} />
                Photography
              </div>

              <div>
                <Video size={14} />
                Videography
              </div>

              <div>
                <FileText size={14} />
                Reporting
              </div>

            </div>


            <a
              href="#contact"
              className="documentation-btn"
            >
              Documentation Enquiry
              <ArrowUpRight size={16} />
            </a>

          </div>


          {/* =================================================
              VISUAL
          ================================================= */}

          <div className="documentation-feature-visual">

            <div className="documentation-glow"></div>

            <div className="documentation-circle documentation-circle-one"></div>

            <div className="documentation-circle documentation-circle-two"></div>


            <div className="documentation-dashboard">

              <div className="documentation-dashboard-top">

                <span>
                  CAMPAIGN REPORT
                </span>

                <CheckCircle2 size={15} />

              </div>


              <div className="documentation-dashboard-main">

                <div className="documentation-camera-box">
                  <Camera size={31} />
                </div>

                <div>
                  <strong>
                    Daily Activity
                  </strong>

                  <span>
                    Campaign Documentation
                  </span>
                </div>

              </div>


              <div className="documentation-dashboard-lines">

                <span></span>
                <span></span>
                <span></span>

              </div>


              <div className="documentation-dashboard-bottom">

                <div>
                  <strong>
                    PHOTO
                  </strong>

                  <small>
                    Coverage
                  </small>
                </div>

                <div>
                  <strong>
                    VIDEO
                  </strong>

                  <small>
                    Coverage
                  </small>
                </div>

                <div>
                  <strong>
                    REPORT
                  </strong>

                  <small>
                    Activity
                  </small>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            SERVICES HEADING
        ===================================================== */}

        <div className="documentation-services-heading">

          <span>
            PHOTOGRAPHY & VIDEOGRAPHY
          </span>

          <h3>
            Campaign
            <strong>
              Visual Documentation
            </strong>
          </h3>

        </div>


        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div className="documentation-services-grid">

          {documentationServices.map((service, index) => {

            const Icon = service.icon;

            return (
              <article
                className="documentation-service-card"
                key={service.title}
              >

                <div className="documentation-service-top">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="documentation-service-icon">
                    <Icon size={18} />
                  </div>

                </div>


                <h4>
                  {service.title}
                </h4>

                <div className="documentation-service-hindi">
                  {service.hindi}
                </div>

                <p>
                  {service.description}
                </p>


                <a
                  href="#contact"
                  className="documentation-service-link"
                >
                  Enquiry
                  <ArrowUpRight size={14} />
                </a>

              </article>
            );

          })}

        </div>


        {/* =====================================================
            REPORTING
        ===================================================== */}

        <div className="documentation-reporting">

          <div className="documentation-reporting-content">

            <span>
              CAMPAIGN REPORTING
            </span>

            <h3>
              Campaign को
              <strong>
                व्यवस्थित रखें।
              </strong>
            </h3>

            <p>
              Campaign activities को track और organise रखने
              के लिए आवश्यक reporting और documentation support
              उपलब्ध कराया जा सकता है।
            </p>


            <div className="documentation-reporting-meta">

              <div>
                <NotebookPen size={16} />
                Daily Reporting
              </div>

              <div>
                <ClipboardList size={16} />
                Activity Tracking
              </div>

            </div>

          </div>


          <div className="documentation-reporting-list">

            {reportingServices.map((item) => (

              <div
                key={item}
                className="documentation-reporting-item"
              >

                <CheckCircle2 size={15} />

                <span>
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="documentation-cta">

          <div>

            <span>
              CAMPAIGN DOCUMENTATION SUPPORT
            </span>

            <h3>
              Campaign का
              <strong>
                पूरा Record।
              </strong>
            </h3>

            <p>
              Photography, videography और campaign reporting
              requirements के लिए enquiry करें।
            </p>

          </div>


          <a
            href="https://wa.me/919820280493"
            target="_blank"
            rel="noreferrer"
            className="documentation-cta-btn"
          >
            Get Details
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </section>
  );
}