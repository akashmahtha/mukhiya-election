import {
  ArrowRight,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* ================= BACKGROUND ================= */}

      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>


      <div className="hero-container">

        {/* ================= LEFT CONTENT ================= */}

        <div className="hero-content">

          <div className="hero-badge">
            <ShieldCheck size={17} />
            <span>हर चुनाव का भरोसेमंद साथी</span>
          </div>


          <h1>
            मुखिया चुनाव
            <span>प्रचार सामग्री</span>
          </h1>


          <p className="hero-subtitle">
            Mukhiya Election Campaign Materials
          </p>


          <p className="hero-description">
            आपके चुनाव प्रचार को बनाएं और भी दमदार।
            <br />
            From campaign products to digital promotion —
            <strong> Election Kart </strong>
            आपके campaign के लिए complete solution देता है।
          </p>


          {/* ================= BUTTONS ================= */}

          <div className="hero-buttons">

            <a
              href="#products"
              className="hero-primary-btn"
            >
              Explore Products
              <ArrowRight size={19} />
            </a>


            <a
              href="https://wa.me/919820280493"
              target="_blank"
              rel="noreferrer"
              className="hero-secondary-btn"
            >
              <MessageCircle size={19} />
              WhatsApp करें
            </a>

          </div>


          {/* ================= CONTACT ================= */}

          <div className="hero-contact">

            <Phone size={17} />

            <span>
              98202 80493
            </span>

            <small>
              Quick Enquiry Available
            </small>

          </div>

        </div>


        {/* ================= RIGHT VISUAL ================= */}

        <div className="hero-visual">

          <div className="hero-card hero-card-main">

            <div className="hero-card-top">

              <span>
                Election
              </span>

              <strong>
                Kart
              </strong>

            </div>


            <div className="hero-card-title">

              <span>
                Campaign
              </span>

              <span>
                Ready?
              </span>

            </div>


            <div className="hero-card-items">

              <div>
                🏳️ Flags
              </div>

              <div>
                🎖️ Badges
              </div>

              <div>
                👕 T-Shirts
              </div>

              <div>
                📢 Banners
              </div>

            </div>


            <div className="hero-card-bottom">

              <span>
                Campaign Materials
              </span>

            </div>

          </div>


          {/* ================= FLOATING CARD 1 ================= */}

          <div className="floating-card floating-card-one">

            <span>
              20+
            </span>

            <small>
              Campaign Items
            </small>

          </div>


          {/* ================= FLOATING CARD 2 ================= */}

          <div className="floating-card floating-card-two">

            <span>
              Fast
            </span>

            <small>
              Enquiry Support
            </small>

          </div>

        </div>

      </div>


      {/* ================= SCROLL ================= */}

      <div className="hero-scroll">

        <span></span>

        Scroll to explore

      </div>

    </section>
  );
}