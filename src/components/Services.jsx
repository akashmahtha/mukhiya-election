import {
  Printer,
  BadgeCheck,
  Package,
  Bike,
  Palette,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";

import "../styles/services.css";

const services = [
  {
    id: 1,
    number: "01",
    icon: Printer,
    title: "Printing",
    hindi: "प्रिंटिंग सर्विस",
    description:
      "Pamphlet, Flex Banner, Pole Banner, Poster aur campaign printing requirements ke liye customised solutions.",
  },
  {
    id: 2,
    number: "02",
    icon: BadgeCheck,
    title: "Campaign Branding",
    hindi: "चुनाव प्रचार ब्रांडिंग",
    description:
      "Badge, Cap, Flag, Patka, Gamcha, T-Shirt aur other campaign branding materials.",
  },
  {
    id: 3,
    number: "03",
    icon: Package,
    title: "Booth Packet",
    hindi: "बूथ पैकेट",
    description:
      "Booth ke liye required campaign materials ko organised packet ke form mein prepare karne ka option.",
  },
  {
    id: 4,
    number: "04",
    icon: Bike,
    title: "Campaign Vehicles",
    hindi: "प्रचार वाहन",
    description:
      "Bike promotion aur LED vehicle jaise ground-level campaign promotion options.",
  },
  {
    id: 5,
    number: "05",
    icon: Palette,
    title: "Custom Design",
    hindi: "कस्टम डिजाइन",
    description:
      "Campaign requirements ke according customised artwork, branding aur promotional designs.",
  },
  {
    id: 6,
    number: "06",
    icon: Megaphone,
    title: "Promotion",
    hindi: "प्रचार एवं प्रमोशन",
    description:
      "Ground campaign visibility ke liye multiple promotional material aur campaign support options.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="services-section"
    >
      <div className="services-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="services-header">

          <div className="section-label">
            Our Services
          </div>

          <h2>
            Campaign Ko
            <span> Strong Banaye</span>
          </h2>

          <p>
            चुनाव प्रचार की planning se lekar
            campaign materials aur promotion tak,
            multiple services ek hi platform par.
          </p>

        </div>


        {/* =================================================
            SERVICES GRID
        ================================================= */}

        <div className="services-grid">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.id}
              >

                {/* Number */}

                <div className="service-top">

                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-icon">
                    <Icon size={21} />
                  </div>

                </div>


                {/* Content */}

                <h3>
                  {service.title}
                </h3>

                <div className="service-hindi">
                  {service.hindi}
                </div>

                <p>
                  {service.description}
                </p>


                {/* Bottom */}

                <div className="service-bottom">

                  <span>
                    Explore Service
                  </span>

                  <ArrowUpRight size={15} />

                </div>

              </article>
            );

          })}

        </div>


        {/* =================================================
            CTA
        ================================================= */}

        <div className="services-cta">

          <div>

            <span>
              NEED CAMPAIGN SUPPORT?
            </span>

            <h3>
              Apni requirement
              <strong>
                share karein.
              </strong>
            </h3>

          </div>


          <a
            href="https://wa.me/919820280493"
            target="_blank"
            rel="noopener noreferrer"
            className="services-cta-button"
          >

            WhatsApp Enquiry

            <ArrowUpRight size={16} />

          </a>

        </div>

      </div>
    </section>
  );
}