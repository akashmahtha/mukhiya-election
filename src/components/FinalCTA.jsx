import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import "../styles/finalCTA.css";

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-container">

        <div className="final-cta-content">

          <div className="final-cta-label">
            Start Your Campaign
          </div>

          <h2>
            चुनाव प्रचार की
            <br />
            तैयारी <span>आज से करें.</span>
          </h2>

          <p>
            Apne campaign ke liye products, printing,
            digital promotion aur campaign services ki
            enquiry karein.
          </p>

          <div className="final-cta-actions">

            <a
              href="https://wa.me/919820280493"
              target="_blank"
              rel="noreferrer"
              className="final-whatsapp"
            >
              <MessageCircle size={19} />
              WhatsApp Enquiry
              <ArrowUpRight size={17} />
            </a>

            <a
              href="tel:+919820280493"
              className="final-call"
            >
              <Phone size={18} />
              Call Now
            </a>

          </div>

        </div>

        <div className="final-cta-visual">

          <div className="cta-circle cta-circle-one"></div>
          <div className="cta-circle cta-circle-two"></div>

          <div className="cta-message-card">

            <Send size={25} />

            <span>
              Let's Build Your
            </span>

            <strong>
              Campaign
            </strong>

            <small>
              Together
            </small>

          </div>

        </div>

      </div>
    </section>
  );
}