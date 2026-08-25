import {
  ArrowRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import "../styles/hero.css";

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

          {/* Badge */}

          <div className="hero-badge">

            <ShieldCheck size={17} />

            <span>
              बिहार मुखिया चुनाव 2026
            </span>

          </div>


          {/* Main Heading */}

          <h1>

            बिहार मुखिया चुनाव

            <span>
              संपूर्ण चुनावी समाधान
            </span>

          </h1>


          {/* Subtitle */}

          <p className="hero-subtitle">
            संपूर्ण चुनाव प्रचार एवं Campaign Support Services
          </p>


          {/* Description */}

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
              BUTTONS
          ================================================= */}

          <div className="hero-buttons">

            <a
              href="#services"
              className="hero-primary-btn"
            >

              Explore Services

              <ArrowRight size={18} />

            </a>


            <a
              href="https://wa.me/919820280493"
              target="_blank"
              rel="noreferrer"
              className="hero-secondary-btn"
            >

              <MessageCircle size={18} />

              WhatsApp Enquiry

            </a>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="hero-contact">

            <Phone size={16} />

            <strong>
              98202 80493
            </strong>

            <span>
              Quick Campaign Enquiry
            </span>

          </div>

        </div>


        {/* =================================================
            RIGHT VISUAL
        ================================================= */}

        <div className="hero-visual">


          {/* Decorative Glow */}

          <div className="hero-glow hero-glow-one"></div>

          <div className="hero-glow hero-glow-two"></div>


          {/* Main Campaign Card */}

          <div className="hero-main-card">


            {/* Card Header */}

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


            {/* Card Main */}

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


            {/* Campaign Steps */}

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


            {/* Card Footer */}

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

      <a
        href="#about"
        className="hero-scroll"
      >

        <span className="hero-scroll-line"></span>

        Scroll to explore

      </a>

    </section>
  );
}