import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import "../styles/contact.css";

const serviceOptions = [
  "Campaign Planning",
  "Printing & Promotional Material",
  "Digital Campaign",
  "Graphic Design",
  "Ground Campaign Support",
  "Campaign Vehicles",
  "Event Management",
  "Photography & Videography",
  "Complete Campaign Support",
];

const serviceAreas = [
  "Patna",
  "Darbhanga",
  "Muzaffarpur",
  "Gaya",
  "Bhagalpur",
  "Purnia",
  "Begusarai",
  "Samastipur",
  "Madhubani",
  "Sitamarhi",
  "Supaul",
  "Saharsa",
  "Araria",
  "Katihar",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="contact-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="contact-header">

          <div className="section-label">
            Get In Touch
          </div>

          <h2>
            आपके Campaign की
            <span>
              शुरुआत यहां से करें।
            </span>
          </h2>

          <p>
            बिहार मुखिया चुनाव के लिए campaign planning,
            printing, branding, digital promotion, ground
            campaign, event management और अन्य campaign
            support services के लिए हमसे संपर्क करें।
          </p>

        </div>


        {/* =====================================================
            MAIN CONTACT AREA
        ===================================================== */}

        <div className="contact-main">

          {/* =================================================
              LEFT
          ================================================= */}

          <div className="contact-info">

            <div className="contact-info-heading">

              <span>
                CAMPAIGN ENQUIRY
              </span>

              <h3>
                आपकी Requirement,
                <strong>
                  हमारी Professional Support.
                </strong>
              </h3>

              <p>
                अपनी campaign requirement बताएं। हमारी team
                project scope, location और requirement के
                अनुसार available services पर चर्चा करेगी।
              </p>

            </div>


            {/* =================================================
                CONTACT CARDS
            ================================================= */}

            <div className="contact-cards">

              {/* =================================================
                  PHONE 1
              ================================================= */}

              <a
                href="tel: 7352555555"
                className="contact-card"
              >

                <div className="contact-card-icon">
                  <Phone size={19} />
                </div>

                <div>
                  <span>
                    CALL US
                  </span>

                  <strong>
                     7352555555
                  </strong>

                  <small>
                    Primary Campaign Enquiry
                  </small>
                </div>

                <ArrowUpRight
                  size={15}
                  className="contact-card-arrow"
                />

              </a>


              {/* =================================================
                  PHONE 2
              ================================================= */}

              <a
                href="tel:+919820280493"
                className="contact-card"
              >

                <div className="contact-card-icon">
                  <Phone size={19} />
                </div>

                <div>
                  <span>
                    CALL US
                  </span>

                  <strong>
                    98202 80493
                  </strong>

                  <small>
                    Quick Campaign Enquiry
                  </small>
                </div>

                <ArrowUpRight
                  size={15}
                  className="contact-card-arrow"
                />

              </a>


              {/* =================================================
                  WHATSAPP
              ================================================= */}

              <a
                href="https://wa.me/919820280493"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >

                <div className="contact-card-icon">
                  <MessageCircle size={19} />
                </div>

                <div>
                  <span>
                    WHATSAPP
                  </span>

                  <strong>
                    WhatsApp Us
                  </strong>

                  <small>
                    Fast Campaign Discussion
                  </small>
                </div>

                <ArrowUpRight
                  size={15}
                  className="contact-card-arrow"
                />

              </a>


              {/* =================================================
                  LOCATION
              ================================================= */}

              <div className="contact-card contact-card-static">

                <div className="contact-card-icon">
                  <MapPin size={19} />
                </div>

                <div>
                  <span>
                    OFFICE
                  </span>

                  <strong>
                    Patna, Bihar
                  </strong>

                  <small>
                    Serving Campaign Requirements Across Bihar
                  </small>
                </div>

              </div>

            </div>


            {/* =================================================
                SERVICE AREA
            ================================================= */}

            <div className="contact-area">

              <span>
                SERVICE NETWORK
              </span>

              <h4>
                Bihar में Campaign Support
              </h4>

              <div className="contact-area-list">

                {serviceAreas.map((area) => (
                  <div key={area}>
                    <CheckCircle2 size={12} />
                    {area}
                  </div>
                ))}

              </div>

              <small>
                और अन्य बिहार क्षेत्र — services की availability
                project scope, location, permissions और campaign
                requirements के अनुसार तय की जाएगी।
              </small>

            </div>

          </div>


          {/* =================================================
              RIGHT FORM
          ================================================= */}

          <div className="contact-form-wrapper">

            <div className="contact-form-header">

              <span>
                SEND ENQUIRY
              </span>

              <h3>
                Campaign Requirement
              </h3>

              <p>
                नीचे अपनी basic requirement share करें।
              </p>

            </div>


            <form
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >

              {/* NAME */}

              <div className="contact-form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />

              </div>


              {/* PHONE */}

              <div className="contact-form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter phone number"
                />

              </div>


              {/* LOCATION */}

              <div className="contact-form-group">

                <label htmlFor="location">
                  Panchayat / Location
                </label>

                <input
                  id="location"
                  type="text"
                  placeholder="Enter your location"
                />

              </div>


              {/* SERVICE */}

              <div className="contact-form-group">

                <label htmlFor="service">
                  Campaign Requirement
                </label>

                <select
                  id="service"
                  defaultValue=""
                >

                  <option
                    value=""
                    disabled
                  >
                    Select a service
                  </option>

                  {serviceOptions.map((service) => (
                    <option
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  ))}

                </select>

              </div>


              {/* MESSAGE */}

              <div className="contact-form-group contact-form-full">

                <label htmlFor="message">
                  Requirement Details
                </label>

                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell us about your campaign requirement..."
                ></textarea>

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit"
              >
                Send Campaign Enquiry

                <Send size={16} />

              </button>


              <small className="contact-form-note">
                By submitting this form, you agree to be contacted
                regarding your campaign enquiry.
              </small>

            </form>

          </div>

        </div>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <div className="contact-bottom">

          <div className="contact-bottom-icon">
            <MessageCircle size={20} />
          </div>

          <div className="contact-bottom-content">

            <span>
              NEED QUICK SUPPORT?
            </span>

            <h3>
              WhatsApp पर
              <strong>
                Campaign Discuss करें।
              </strong>
            </h3>

          </div>

          <a
            href="https://wa.me/919820280493"
            target="_blank"
            rel="noreferrer"
            className="contact-whatsapp-btn"
          >
            WhatsApp Now

            <ArrowUpRight size={16} />

          </a>

        </div>

      </div>
    </section>
  );
}