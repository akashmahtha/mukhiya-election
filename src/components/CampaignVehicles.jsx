import {
  ArrowUpRight,
  CarFront,
  CirclePlay,
  Megaphone,
  MonitorPlay,
  Speaker,
  Zap,
} from "lucide-react";

import campaignVehicles from "../data/campaignVehicles";

import "../styles/campaignVehicles.css";

const vehicleServices = [
  {
    icon: MonitorPlay,
    title: "LED Van",
    hindi: "एलईडी वैन",
    items: [
      "LED Screen",
      "Generator",
      "Vehicle Branding",
      "Video Playback",
    ],
  },
  {
    icon: Speaker,
    title: "Audio Promotion Vehicle",
    hindi: "ऑडियो प्रचार वाहन",
    items: [
      "Sound System",
      "Amplifier",
      "Speakers",
      "Generator",
    ],
  },
  {
    icon: CarFront,
    title: "Mobile Branding",
    hindi: "मोबाइल ब्रांडिंग",
    items: [
      "Auto Branding",
      "E-rickshaw Branding",
      "Vehicle Stickers",
      "Mobile Banners",
    ],
  },
];

export default function CampaignVehicles() {
  return (
    <section
      id="campaign-vehicles"
      className="campaign-vehicles-section"
    >
      <div className="campaign-vehicles-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="campaign-vehicles-header">

          <div className="section-label">
            Mobile Promotion
          </div>

          <h2>
            प्रचार वाहन एवं
            <span>
              Mobile Campaign Solutions
            </span>
          </h2>

          <p>
            पंचायत क्षेत्र में campaign communication के लिए
            LED, audio और branded mobile promotion solutions
            उपलब्ध कराए जा सकते हैं।
          </p>

        </div>


        {/* =====================================================
            MAIN FEATURE
        ===================================================== */}

        <div className="campaign-vehicle-feature">

          <div className="campaign-vehicle-feature-content">

            <span className="campaign-vehicle-feature-label">
              CAMPAIGN VEHICLES
            </span>

            <h3>
              Campaign को
              <span>
                हर क्षेत्र तक पहुंचाएं।
              </span>
            </h3>

            <p>
              Mobile campaign solutions के माध्यम से
              campaign message, video और audio content को
              अलग-अलग locations तक पहुंचाने में सहायता की
              जा सकती है।
            </p>


            <div className="campaign-vehicle-points">

              <div>
                <Zap size={14} />
                LED Promotion
              </div>

              <div>
                <Megaphone size={14} />
                Audio Promotion
              </div>

              <div>
                <CarFront size={14} />
                Vehicle Branding
              </div>

            </div>


            <a
              href="#contact"
              className="campaign-vehicle-btn"
            >
              Vehicle Enquiry
              <ArrowUpRight size={16} />
            </a>

          </div>


          {/* =================================================
              FEATURE VISUAL
          ================================================= */}

          <div className="campaign-vehicle-feature-visual">

            <div className="campaign-vehicle-glow"></div>

            <div className="campaign-vehicle-circle circle-one"></div>

            <div className="campaign-vehicle-circle circle-two"></div>

            <div className="campaign-vehicle-visual-card">

              <CarFront size={48} />

              <strong>
                Campaign Vehicle
              </strong>

              <span>
                LED • Audio • Branding
              </span>

            </div>

          </div>

        </div>


        {/* =====================================================
            VEHICLE SERVICE TYPES
        ===================================================== */}

        <div className="campaign-vehicle-services">

          {vehicleServices.map((service) => {

            const Icon = service.icon;

            return (
              <article
                className="campaign-vehicle-service-card"
                key={service.title}
              >

                <div className="campaign-vehicle-service-icon">
                  <Icon size={20} />
                </div>

                <h3>
                  {service.title}
                </h3>

                <div className="campaign-vehicle-service-hindi">
                  {service.hindi}
                </div>

                <div className="campaign-vehicle-service-list">

                  {service.items.map((item) => (

                    <div key={item}>
                      <span></span>
                      {item}
                    </div>

                  ))}

                </div>

              </article>
            );

          })}

        </div>


        {/* =====================================================
            VEHICLE GALLERY
        ===================================================== */}

        <div className="campaign-vehicle-gallery">

          {campaignVehicles.map((vehicle) => (

            <article
              className="campaign-vehicle-card"
              key={vehicle.id}
            >

              <div className="campaign-vehicle-image">

                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  loading="lazy"
                />

                <div className="campaign-vehicle-image-overlay"></div>

                <span className="campaign-vehicle-tag">
                  {vehicle.tag}
                </span>

                <div className="campaign-vehicle-image-icon">
                  <CirclePlay size={18} />
                </div>

              </div>


              <div className="campaign-vehicle-card-content">

                <h3>
                  {vehicle.title}
                </h3>

                <div className="campaign-vehicle-card-hindi">
                  {vehicle.hindi}
                </div>

                <p>
                  {vehicle.description}
                </p>

                <a
                  href="#contact"
                  className="campaign-vehicle-card-link"
                >
                  Enquiry Karein
                  <ArrowUpRight size={15} />
                </a>

              </div>

            </article>

          ))}

        </div>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div className="campaign-vehicle-bottom">

          <div>

            <span>
              MOBILE CAMPAIGN SUPPORT
            </span>

            <h3>
              LED • Audio •
              <strong>
                Vehicle Branding
              </strong>
            </h3>

            <p>
              Campaign requirements और location के अनुसार
              mobile promotion solution तय किया जा सकता है।
            </p>

          </div>


          <a
            href="https://wa.me/919820280493"
            target="_blank"
            rel="noreferrer"
            className="campaign-vehicle-bottom-btn"
          >
            Get Vehicle Details
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}