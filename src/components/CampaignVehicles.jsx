import {
  ArrowUpRight,
  Bike,
  CarFront,
  Lightbulb,
} from "lucide-react";

import campaignVehicles from "../data/campaignVehicles";

import "../styles/campaignVehicles.css";


/* =====================================================
   ICON MAP
===================================================== */

const iconMap = {
  "BIKE CAMPAIGN": Bike,
  "LED PROMOTION": Lightbulb,
  "CAMPAIGN VEHICLE": CarFront,
};


/* =====================================================
   WHATSAPP ENQUIRY
===================================================== */

const getWhatsAppUrl = (vehicleName = "Campaign Vehicle") => {
  const message = encodeURIComponent(
    `Hello Election Kart, mujhe "${vehicleName}" ke baare mein enquiry karni hai.`
  );

  return `https://wa.me/919820280493?text=${message}`;
};


export default function CampaignVehicles() {
  return (
    <section
      id="campaign-vehicles"
      className="campaign-section"
    >

      <div className="campaign-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="campaign-header">

          <div className="section-label">
            Campaign Vehicles
          </div>

          <h2>
            Campaign Ko
            <span> Move Karein</span>
          </h2>

          <p>
            Ground-level election promotion ke liye
            campaign bike, LED promotion aur vehicle-based
            campaign options.
          </p>

        </div>


        {/* =================================================
            FEATURED CAMPAIGN
        ================================================= */}

        <div className="campaign-featured">


          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="campaign-featured-content">

            <span className="campaign-featured-label">
              GROUND CAMPAIGN
            </span>


            <h3>
              Apna Campaign
              <br />
              <span>
                Har Jagah Le Jayein.
              </span>
            </h3>


            <p>
              Mobile campaign setup ke through aapka
              campaign message ground level par different
              locations tak reach kar sakta hai.
            </p>


            {/* =================================================
                FEATURE POINTS
            ================================================= */}

            <div className="campaign-featured-points">

              <div>
                <span>01</span>
                Bike Campaign
              </div>

              <div>
                <span>02</span>
                LED Promotion
              </div>

              <div>
                <span>03</span>
                Campaign Vehicle
              </div>

            </div>


            {/* =================================================
                ENQUIRY BUTTON
            ================================================= */}

            <a
              href={getWhatsAppUrl("Campaign Vehicle")}
              target="_blank"
              rel="noopener noreferrer"
              className="campaign-featured-btn"
            >
              Campaign Enquiry

              <ArrowUpRight
                size={17}
              />
            </a>

          </div>


          {/* =================================================
              FEATURED IMAGE
          ================================================= */}

          <div className="campaign-featured-visual">

            <div className="campaign-visual-glow"></div>

            <img
              src={
                campaignVehicles[0]?.image
              }
              alt={
                campaignVehicles[0]
                  ? `${campaignVehicles[0].title} - ${campaignVehicles[0].hindi}`
                  : "Campaign Vehicle"
              }
              className="campaign-featured-image"
              loading="lazy"
            />

          </div>

        </div>


        {/* =================================================
            VEHICLE CARDS
        ================================================= */}

        <div className="campaign-grid">

          {campaignVehicles.length > 0 ? (

            campaignVehicles.map((vehicle) => {

              const Icon =
                iconMap[vehicle.tag] ||
                CarFront;

              return (
                <article
                  className="campaign-card"
                  key={vehicle.id}
                >


                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div className="campaign-card-image">

                    <img
                      src={vehicle.image}
                      alt={`${vehicle.title} - ${vehicle.hindi}`}
                      className="campaign-card-img"
                      loading="lazy"
                    />


                    {/* Tag */}

                    <span className="campaign-tag">
                      {vehicle.tag}
                    </span>

                  </div>


                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="campaign-card-content">


                    {/* Icon */}

                    <div className="campaign-card-icon">

                      <Icon
                        size={18}
                      />

                    </div>


                    {/* Title */}

                    <h3>
                      {vehicle.title}
                    </h3>


                    {/* Hindi */}

                    <div className="campaign-card-hindi">
                      {vehicle.hindi}
                    </div>


                    {/* Description */}

                    <p>
                      {vehicle.description}
                    </p>


                    {/* =================================================
                        WHATSAPP ENQUIRY
                    ================================================= */}

                    <a
                      href={getWhatsAppUrl(
                        vehicle.title
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="campaign-card-link"
                    >
                      Enquiry Karein

                      <ArrowUpRight
                        size={15}
                      />

                    </a>

                  </div>

                </article>
              );

            })

          ) : (

            /* =================================================
               EMPTY STATE
            ================================================= */

            <div className="campaign-empty">

              <CarFront size={30} />

              <h3>
                Campaign Vehicles
              </h3>

              <p>
                Vehicle options will be added here.
              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}