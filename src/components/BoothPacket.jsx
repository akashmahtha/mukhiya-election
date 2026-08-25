import {
  ArrowUpRight,
  CheckCircle2,
  Package,
} from "lucide-react";

import boothPacketItems from "../data/boothPacket";

import "../styles/boothPacket.css";

export default function BoothPacket() {
  /* =====================================================
     WHATSAPP ENQUIRY
  ===================================================== */

  const whatsappMessage = encodeURIComponent(
    "Hello Election Kart, mujhe Booth Packet ke baare mein enquiry karni hai."
  );

  const whatsappUrl =
    `https://wa.me/919820280493?text=${whatsappMessage}`;


  /* =====================================================
     IMAGE FALLBACK
  ===================================================== */

  const handleImageError = (event) => {
    event.currentTarget.style.display = "none";

    event.currentTarget.parentElement.classList.add(
      "booth-image-error"
    );
  };


  return (
    <section
      id="booth-packet"
      className="booth-section"
    >

      <div className="booth-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="booth-header">

          <div className="section-label">
            Booth Packet
          </div>

          <h2>
            Booth Ki Preparation,
            <span> Ek Jagah Par</span>
          </h2>

          <p>
            Booth Packet ke liye PDF mein listed required
            items ko ek organised collection ke form mein
            present kiya gaya hai.
          </p>

        </div>


        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="booth-main">


          {/* =================================================
              LEFT INTRO
          ================================================= */}

          <div className="booth-intro">

            <div className="booth-icon">
              <Package size={28} />
            </div>


            <span className="booth-small-title">
              COMPLETE BOOTH PACKET
            </span>


            <h3>
              {boothPacketItems.length || 12}
              <br />
              <span>Essential Items</span>
            </h3>


            <p>
              चुनाव से जुड़े booth preparation ke liye
              listed materials ko ek single packet concept
              mein organise kiya gaya hai.
            </p>


            {/* =================================================
                CHECK LIST
            ================================================= */}

            <div className="booth-check-list">

              <div>
                <CheckCircle2 size={17} />

                <span>
                  {boothPacketItems.length || 12}
                  {" "}
                  Listed Items
                </span>
              </div>


              <div>
                <CheckCircle2 size={17} />

                <span>
                  Organised Collection
                </span>
              </div>


              <div>
                <CheckCircle2 size={17} />

                <span>
                  Campaign Requirement
                </span>
              </div>

            </div>


            {/* =================================================
                ENQUIRY BUTTON
            ================================================= */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="booth-enquiry"
            >
              Booth Packet Enquiry

              <ArrowUpRight size={17} />
            </a>

          </div>


          {/* =================================================
              RIGHT — BOOTH ITEMS
          ================================================= */}

          <div className="booth-items">

            {boothPacketItems.length > 0 ? (

              boothPacketItems.map((item) => (

                <article
                  className="booth-item"
                  key={item.id}
                >


                  {/* IMAGE */}

                  <div className="booth-item-image">

                    <img
                      src={item.image}
                      alt={`${item.name} - ${item.englishName}`}
                      loading="lazy"
                      onError={handleImageError}
                    />

                    <span>
                      {item.number}
                    </span>

                  </div>


                  {/* CONTENT */}

                  <div className="booth-item-content">

                    <h4>
                      {item.name}
                    </h4>

                    <p>
                      {item.englishName}
                    </p>

                  </div>

                </article>

              ))

            ) : (

              <div className="booth-empty">

                <Package size={28} />

                <h3>
                  Booth Packet Items
                </h3>

                <p>
                  Items details will be added here.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}