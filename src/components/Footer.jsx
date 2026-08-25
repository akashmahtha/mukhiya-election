import {
  ArrowUpRight,
  MapPin,
  Phone,
  MessageCircle,
  Share2,
} from "lucide-react";

import "../styles/footer.css";

const productLinks = [
  "Badges",
  "Caps & Topi",
  "Flags",
  "Patka & Gamcha",
  "Printing",
  "Clothing",
  "Stickers",
];

const quickLinks = [
  {
    label: "Home",
    target: "top",
  },
  {
    label: "About",
    target: "about",
  },
  {
    label: "Products",
    target: "products",
  },
  {
    label: "Services",
    target: "services",
  },
  {
    label: "Booth Packet",
    target: "booth-packet",
  },
  {
    label: "Campaign Vehicles",
    target: "campaign-vehicles",
  },
  {
    label: "Gallery",
    target: "gallery",
  },
  {
    label: "Contact",
    target: "contact",
  },
];

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="footer-main">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="footer-brand">

            <button
              type="button"
              className="footer-logo"
              onClick={() => scrollToSection("top")}
              aria-label="Election Kart Home"
            >

              <div className="footer-logo-mark">
                EK
              </div>

              <div className="footer-logo-text">
                <strong>ELECTION</strong>
                <span>KART</span>
              </div>

            </button>


            <p className="footer-description">
              Election campaign ke liye products,
              printing, branding aur promotional
              solutions — ek organised platform par.
            </p>


            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <div className="footer-socials">

              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="footer-social-text"
              >
                IG
              </a>


              {/* Facebook */}

              <a
                href="#"
                aria-label="Facebook"
                className="footer-social-text"
              >
                f
              </a>


              {/* WhatsApp */}

              <a
                href="https://wa.me/919820280493"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>


              {/* Other Social */}

              <a
                href="#"
                aria-label="Social Media"
              >
                <Share2 size={16} />
              </a>

            </div>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="footer-column">

            <h3>
              Quick Links
            </h3>

            <div className="footer-links">

              {quickLinks.map((item) => (
                <button
                  type="button"
                  key={item.label}
                  onClick={() =>
                    scrollToSection(item.target)
                  }
                >
                  {item.label}
                </button>
              ))}

            </div>

          </div>


          {/* =================================================
              PRODUCTS
          ================================================= */}

          <div className="footer-column">

            <h3>
              Products
            </h3>

            <div className="footer-links">

              {productLinks.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() =>
                    scrollToSection("products")
                  }
                >
                  {item}
                </button>
              ))}

            </div>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="footer-column footer-contact">

            <h3>
              Contact
            </h3>


            {/* OFFICE */}

            <div className="footer-contact-item">

              <div className="footer-contact-icon">
                <MapPin size={16} />
              </div>

              <p>
                Election Kart,
                <br />
                Bhagwat Complex, Office No. 401,
                <br />
                4th Floor, Above Bata Show Room,
                <br />
                Anishabad, Patna – 800002
              </p>

            </div>


            {/* PHONE */}

            <a
              href="tel:+919820280493"
              className="footer-contact-item footer-contact-link"
            >

              <div className="footer-contact-icon">
                <Phone size={16} />
              </div>

              <p>
                <strong>
                  98202 80493
                </strong>

                <span>
                  Call for Enquiry
                </span>
              </p>

            </a>


            {/* WHATSAPP */}

            <a
              href="https://wa.me/919820280493"
              target="_blank"
              rel="noreferrer"
              className="footer-contact-item footer-contact-link"
            >

              <div className="footer-contact-icon">
                <MessageCircle size={16} />
              </div>

              <p>
                <strong>
                  WhatsApp
                </strong>

                <span>
                  Quick Campaign Enquiry
                </span>
              </p>

              <ArrowUpRight
                size={15}
                className="footer-contact-arrow"
              />

            </a>

          </div>

        </div>


        {/* =====================================================
            FOOTER CTA
        ===================================================== */}

        <div className="footer-cta">

          <div>

            <span>
              READY TO START?
            </span>

            <h3>
              Apna Campaign

              <strong>
                Aaj Se Plan Karein.
              </strong>
            </h3>

          </div>


          <a
            href="https://wa.me/919820280493"
            target="_blank"
            rel="noreferrer"
            className="footer-cta-button"
          >
            WhatsApp Us
            <ArrowUpRight size={16} />
          </a>

        </div>


        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Election Kart.
            All Rights Reserved.
          </p>


          <div className="footer-bottom-links">

            <button
              type="button"
              onClick={() =>
                scrollToSection("top")
              }
            >
              Back to Top
            </button>

            <span>
              •
            </span>

            <span>
              Election Campaign Solutions
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}