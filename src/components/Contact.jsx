import {
  MapPin,
  Phone,
  MessageCircle,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import "../styles/contact.css";


/* =====================================================
   WHATSAPP
===================================================== */

const whatsappUrl =
  "https://wa.me/919820280493?text=Hello%20Election%20Kart%2C%20mujhe%20campaign%20materials%20aur%20services%20ke%20baare%20mein%20enquiry%20karni%20hai.";


/* =====================================================
   CONTACT DETAILS
===================================================== */

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Office",
    hindi: "हमारा कार्यालय",
    content: (
      <>
        Election Kart,
        <br />
        Bhagwat Complex, Office No. 401,
        <br />
        4th Floor, Above Bata Show Room,
        <br />
        Anishabad, Opposite Police Colony,
        <br />
        Patna – 800002
      </>
    ),
  },

  {
    icon: Phone,
    title: "Call Us",
    hindi: "फोन करें",
    content: (
      <>
        <strong>98202 80493</strong>
        <br />
        Campaign Enquiry & Support
      </>
    ),
  },

  {
    icon: MessageCircle,
    title: "WhatsApp",
    hindi: "WhatsApp पर बात करें",
    content: (
      <>
        Quick campaign enquiry ke liye
        <br />
        WhatsApp par message karein.
      </>
    ),
  },

  {
    icon: Clock3,
    title: "Enquiry",
    hindi: "Campaign Enquiry",
    content: (
      <>
        Products, Printing,
        <br />
        Campaign Materials & Services
      </>
    ),
  },
];


export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >

      <div className="contact-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="contact-header">

          <div className="section-label">
            Contact Us
          </div>

          <h2>
            Campaign Ke Liye
            <span> Baat Karein</span>
          </h2>

          <p>
            Aapko campaign material, printing ya promotion
            service chahiye? Election Kart se enquiry karein.
          </p>

        </div>


        {/* =================================================
            CONTACT CARDS
        ================================================= */}

        <div className="contact-grid">

          {contactDetails.map((item, index) => {

            const Icon = item.icon;

            return (
              <article
                className={`contact-card ${
                  index === 0
                    ? "contact-card-main"
                    : ""
                }`}
                key={item.title}
              >

                {/* Icon */}

                <div className="contact-icon">
                  <Icon size={21} />
                </div>


                {/* Title */}

                <h3>
                  {item.title}
                </h3>


                {/* Hindi */}

                <div className="contact-hindi">
                  {item.hindi}
                </div>


                {/* Content */}

                <p>
                  {item.content}
                </p>

              </article>
            );

          })}

        </div>


        {/* =================================================
            CONTACT BUTTONS
        ================================================= */}

        <div className="contact-actions">

          {/* CALL */}

          <a
            href="tel:+919820280493"
            className="contact-call-btn"
          >

            <Phone size={18} />

            <span>
              98202 80493
            </span>

          </a>


          {/* WHATSAPP */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-whatsapp-btn"
          >

            <MessageCircle size={18} />

            <span>
              WhatsApp Enquiry
            </span>

            <ArrowUpRight size={17} />

          </a>

        </div>


      </div>

    </section>
  );
}