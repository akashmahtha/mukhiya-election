import { ArrowRight, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* Background */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <div className="hero-badge">
            <ShieldCheck size={17} />
            <span>हर चुनाव का भरोसेमंद साथी</span>
          </div>

          <h1>
            पंचायत चुनाव
            <span>प्रचार सामग्री</span>
          </h1>

          <p className="hero-subtitle">
            Panchayat Election Campaign Materials
          </p>

          <p className="hero-description">
            आपके चुनाव प्रचार को बनाएं और भी दमदार।
            <br />
            From campaign products to digital promotion —
            <strong> Election Kart </strong>
            आपके campaign के लिए complete solution देता है।
          </p>

          <div className="hero-buttons">

            <a href="#products" className="hero-primary-btn">
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

          <div className="hero-contact">
            <Phone size={17} />
            <span>98202 80493</span>
            <small>Quick Enquiry Available</small>
          </div>

        </div>

        {/* Right Visual */}
        <div className="hero-visual">

          <div className="hero-card hero-card-main">
            <div className="hero-card-top">
              <span>Election</span>
              <strong>Kart</strong>
            </div>

            <div className="hero-card-title">
              <span>Campaign</span>
              <span>Ready?</span>
            </div>

            <div className="hero-card-items">
              <div>🏳️ Flags</div>
              <div>🎖️ Badges</div>
              <div>👕 T-Shirts</div>
              <div>📢 Banners</div>
            </div>

            <div className="hero-card-bottom">
              <span>Campaign Materials</span>
            </div>
          </div>

          <div className="floating-card floating-card-one">
            <span>20+</span>
            <small>Campaign Items</small>
          </div>

          <div className="floating-card floating-card-two">
            <span>Fast</span>
            <small>Enquiry Support</small>
          </div>

        </div>

      </div>

      {/* Bottom Scroll */}
      <div className="hero-scroll">
        <span></span>
        Scroll to explore
      </div>

    </section>
  );
}