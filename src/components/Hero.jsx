import {
  ArrowRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  FileText,
} from "lucide-react";

import "../styles/hero.css";


/* =====================================================
   PDF IMPORTS
===================================================== */

import materialsListPdf from "../assets/election kart final materails list _26.pdf";
import mukhiyaElectionPdf from "../assets/Mukhiya Election 2026 ekart final.pdf";


export default function Hero() {
  return (
    <section
      id="hero"
      className="hero"
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="hero-background">

        <div className="hero-background-pattern"></div>

        <div className="hero-overlay"></div>

      </div>


      {/* =====================================================
          HERO CONTAINER
      ===================================================== */}

      <div className="hero-container">


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="hero-content">


          {/* =================================================
              BADGE
          ================================================= */}

          <div className="hero-badge">

            <ShieldCheck size={17} />

            <span>
              बिहार मुखिया चुनाव 2026
            </span>

          </div>


          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h1>

            बिहार मुखिया चुनाव

            <span>
              संपूर्ण चुनावी समाधान
            </span>

          </h1>


          {/* =================================================
              SUBTITLE
          ================================================= */}

          <p className="hero-subtitle">
            संपूर्ण चुनाव प्रचार एवं Campaign Support Services
          </p>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p className="hero-description">

            रणनीति से लेकर प्रचार सामग्री और ग्राउंड
            एक्सीक्यूशन तक — एक ही जगह संपूर्ण समाधान।

            <br />

            Campaign Planning, Printing, Branding,
            Digital Content, Ground Campaign,
            Events और Documentation के लिए
            professional campaign support।

          </p>


          {/* =================================================
              HIGHLIGHTS
          ================================================= */}

          <div className="hero-highlights">

            <div>

              <CheckCircle2 size={16} />

              <span>
                Campaign Planning
              </span>

            </div>


            <div>

              <CheckCircle2 size={16} />

              <span>
                Printing & Branding
              </span>

            </div>


            <div>

              <CheckCircle2 size={16} />

              <span>
                Digital Campaign
              </span>

            </div>


            <div>

              <CheckCircle2 size={16} />

              <span>
                Ground Support
              </span>

            </div>

          </div>


          {/* =================================================
              MAIN BUTTONS
          ================================================= */}

          <div className="hero-buttons">

            <a
              href="#services"
              className="hero-primary-btn"
            >

              <span>
                Explore Services
              </span>

              <ArrowRight size={18} />

            </a>


            <a
              href="https://wa.me/919820280493"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-secondary-btn"
            >

              <MessageCircle size={18} />

              <span>
                WhatsApp Enquiry
              </span>

            </a>

          </div>


          {/* =================================================
              PDF DOCUMENTS
          ================================================= */}

          <div className="hero-pdf-section">


            {/* PDF TITLE */}

            <div className="hero-pdf-title">

              <FileText size={17} />

              <span>
                Election Campaign Materials
              </span>

            </div>


            {/* PDF BUTTONS */}

            <div className="hero-pdf-buttons">


              {/* =================================================
                  PDF 01
              ================================================= */}

              <a
                href={materialsListPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-pdf-btn"
                aria-label="Open Election Materials List 2026"
              >

                <span className="hero-pdf-number">
                  01
                </span>


                <span className="hero-pdf-icon">

                  <FileText size={18} />

                </span>


                <span className="hero-pdf-content">

                  <strong>
                    Materials List 2026
                  </strong>

                  <small>
                    Complete Election Materials
                  </small>

                </span>


                <ArrowRight size={15} />

              </a>


              {/* =================================================
                  PDF 02
              ================================================= */}

              <a
                href={mukhiyaElectionPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-pdf-btn"
                aria-label="Open Mukhiya Election 2026 Catalogue"
              >

                <span className="hero-pdf-number">
                  02
                </span>


                <span className="hero-pdf-icon">

                  <FileText size={18} />

                </span>


                <span className="hero-pdf-content">

                  <strong>
                    Mukhiya Election 2026
                  </strong>

                  <small>
                    Campaign Catalogue
                  </small>

                </span>


                <ArrowRight size={15} />

              </a>

            </div>

          </div>


          {/* =================================================
              CONTACT NUMBERS
          ================================================= */}

          <div className="hero-contact">


            {/* NUMBER 1 */}

            <a
              href="tel:+9173525555"
              className="hero-contact-number"
              aria-label="Call 73525555"
            >

              <Phone size={16} />

              <strong>
                73525555
              </strong>

            </a>


            {/* DIVIDER */}

            <span className="hero-contact-divider"></span>


            {/* NUMBER 2 */}

            <a
              href="tel:+919820280493"
              className="hero-contact-number"
              aria-label="Call 9820280493"
            >

              <Phone size={16} />

              <strong>
                9820280493
              </strong>

            </a>


            {/* LABEL */}

            <span className="hero-contact-label">
              Quick Campaign Enquiry
            </span>

          </div>

        </div>


        {/* =================================================
            RIGHT VISUAL
        ================================================= */}

        <div className="hero-visual">


          {/* =================================================
              DECORATIVE GLOW
          ================================================= */}

          <div className="hero-glow hero-glow-one"></div>

          <div className="hero-glow hero-glow-two"></div>


          {/* =================================================
              MAIN CAMPAIGN CARD
          ================================================= */}

          <div className="hero-main-card">


            {/* CARD HEADER */}

            <div className="hero-card-header">

              <div className="hero-card-brand">

                <div className="hero-mini-logo">
                  ME
                </div>

                <div>

                  <strong>
                    MUKHIYA
                  </strong>

                  <span>
                    ELECTION
                  </span>

                </div>

              </div>


              <Sparkles
                size={19}
                className="hero-sparkle"
              />

            </div>


            {/* CARD MAIN */}

            <div className="hero-card-main">

              <span className="hero-card-small">
                BIHAR ELECTION 2026
              </span>


              <h2>

                Campaign

                <span>
                  Ready.
                </span>

              </h2>


              <p>
                Strategy • Design • Print •
                Brand • Digital • Ground
              </p>

            </div>


            {/* CARD SERVICES */}

            <div className="hero-card-services">

              <div>

                <span>
                  01
                </span>

                <strong>
                  PLAN
                </strong>

              </div>


              <div>

                <span>
                  02
                </span>

                <strong>
                  DESIGN
                </strong>

              </div>


              <div>

                <span>
                  03
                </span>

                <strong>
                  PRINT
                </strong>

              </div>


              <div>

                <span>
                  04
                </span>

                <strong>
                  DIGITAL
                </strong>

              </div>

            </div>


            {/* CARD FOOTER */}

            <div className="hero-card-footer">

              <span>
                Complete Campaign Support
              </span>

              <ArrowRight size={16} />

            </div>

          </div>


          {/* =================================================
              FLOATING CARD 1
          ================================================= */}

          <div className="hero-floating-card hero-floating-one">

            <span>
              18+
            </span>

            <small>
              Campaign Services
            </small>

          </div>


          {/* =================================================
              FLOATING CARD 2
          ================================================= */}

          <div className="hero-floating-card hero-floating-two">

            <span>
              Bihar
            </span>

            <small>
              Campaign Support
            </small>

          </div>


          {/* =================================================
              FLOATING CARD 3
          ================================================= */}

          <div className="hero-floating-card hero-floating-three">

            <CheckCircle2 size={17} />

            <span>
              Professional
            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <button
        type="button"
        className="hero-scroll"
        onClick={() => {

          const aboutSection =
            document.getElementById("about");

          if (aboutSection) {

            aboutSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

          }

        }}
      >

        <span className="hero-scroll-line"></span>

        <span>
          Scroll to explore
        </span>

      </button>

    </section>
  );
}