import {
  ArrowUpRight,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

import "../styles/footer.css";

/* =====================================================
   CONTACT NUMBERS
===================================================== */

const primaryPhone = "7352555555";
const secondaryPhone = "9820280493";

const primaryPhoneDisplay = "73525 55555";
const secondaryPhoneDisplay = "98202 80493";


/* =====================================================
   CAMPAIGN PRODUCTS
===================================================== */

const productLinks = [
  "Posters & Banners",
  "Flags & Branding",
  "Gamcha & Patka",
  "Caps & T-Shirts",
  "Badges & ID Cards",
  "Pamphlets & Stickers",
  "Pen, Diary & Calendar",
];


/* =====================================================
   SERVICES
===================================================== */

const serviceLinks = [
  {
    label: "Campaign Planning",
    target: "services",
  },
  {
    label: "Digital Campaign",
    target: "services",
  },
  {
    label: "Ground Campaign",
    target: "ground-campaign",
  },
  {
    label: "Campaign Vehicles",
    target: "campaign-vehicles",
  },
  {
    label: "Event Management",
    target: "event-management",
  },
  {
    label: "Documentation",
    target: "documentation",
  },
];


/* =====================================================
   QUICK LINKS
===================================================== */

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
    label: "Gallery",
    target: "gallery",
  },
  {
    label: "Contact",
    target: "contact",
  },
];


/* =====================================================
   FOOTER
===================================================== */

export default function Footer() {

  /* ===================================================
     SCROLL FUNCTION
  =================================================== */

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


        {/* =================================================
            TOP CTA
        ================================================= */}

        <div className="footer-top-cta">

          <div>

            <span>
              BIHAR MUKHIYA ELECTION 2026
            </span>

            <h2>
              अपना Campaign{" "}
              <strong>
                Professional तरीके से Plan करें।
              </strong>
            </h2>

            <p>
              Strategy • Design • Printing • Branding • Digital
              • Ground Campaign • Events • Documentation
            </p>

          </div>


          <a
            href={`https://wa.me/91${primaryPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-top-cta-btn"
          >
            WhatsApp Enquiry

            <ArrowUpRight size={16} />

          </a>

        </div>



        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div className="footer-main">


          {/* =================================================
              BRAND
          ================================================= */}

          <div className="footer-brand">

            <button
              type="button"
              className="footer-logo"
              onClick={() =>
                scrollToSection("top")
              }
              aria-label="Mukhiya Election Home"
            >

              <div className="footer-logo-mark">
                ME
              </div>

              <div className="footer-logo-text">

                <strong>
                  MUKHIYA
                </strong>

                <span>
                  ELECTION
                </span>

              </div>

            </button>


            <p className="footer-description">
              बिहार मुखिया एवं पंचायत चुनाव के लिए
              campaign planning, promotional solutions,
              printing, branding, digital content,
              ground campaign और event support —
              एक integrated platform पर।
            </p>

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
              SERVICES
          ================================================= */}

          <div className="footer-column">

            <h3>
              Services
            </h3>

            <div className="footer-links">

              {serviceLinks.map((item) => (

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
              Campaign Products
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


            {/* =================================================
                OFFICE
            ================================================= */}

            <div className="footer-contact-item">

              <div className="footer-contact-icon">
                <MapPin size={16} />
              </div>

              <p>

                <strong>
                  Patna, Bihar
                </strong>

                <span>
                  Bihar-wide Campaign Support
                </span>

              </p>

            </div>



            {/* =================================================
                PRIMARY PHONE
            ================================================= */}

            <a
              href={`tel:+91${primaryPhone}`}
              className="footer-contact-item footer-contact-link"
            >

              <div className="footer-contact-icon">
                <Phone size={16} />
              </div>

              <p>

                <strong>
                  {primaryPhoneDisplay}
                </strong>

                <span>
                  Call for Enquiry
                </span>

              </p>

            </a>



            {/* =================================================
                SECONDARY PHONE
            ================================================= */}

            <a
              href={`tel:+91${secondaryPhone}`}
              className="footer-contact-item footer-contact-link"
            >

              <div className="footer-contact-icon">
                <Phone size={16} />
              </div>

              <p>

                <strong>
                  {secondaryPhoneDisplay}
                </strong>

                <span>
                  Call for Enquiry
                </span>

              </p>

            </a>



            {/* =================================================
                PRIMARY WHATSAPP
            ================================================= */}

            <a
              href={`https://wa.me/91${primaryPhone}`}
              target="_blank"
              rel="noopener noreferrer"
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
            SERVICE NETWORK
        ===================================================== */}

        <div className="footer-network">

          <div>

            <span>
              SERVICE NETWORK
            </span>

            <h3>
              Bihar में Campaign Support
            </h3>

          </div>

          <p>
            Patna • Darbhanga • Muzaffarpur • Gaya • Bhagalpur •
            Purnia • Begusarai • Samastipur • Madhubani • Sitamarhi
            • Supaul • Saharsa • Araria • Katihar • और अन्य बिहार क्षेत्र
          </p>

        </div>



        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Mukhiya Election.
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
              Next Gen / Election Campaign & Promotional Solutions
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}