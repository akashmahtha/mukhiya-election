import {
  PackageCheck,
  Megaphone,
  Truck,
  Palette,
} from "lucide-react";

import "../styles/whyChoose.css";

const features = [
  {
    id: 1,
    icon: PackageCheck,
    number: "01",
    title: "Campaign Materials",
    hindi: "चुनाव प्रचार सामग्री",
    description:
      "Badge, Cap, Flag, Patka, Gamcha, I-Card, Sticker, Banner aur other campaign materials ek hi place par.",
  },
  {
    id: 2,
    icon: Palette,
    number: "02",
    title: "Printing & Branding",
    hindi: "Printing & Custom Design",
    description:
      "Pamphlet, Flex Banner, Pole Banner, T-Shirt, Cap aur campaign branding ke liye customised options.",
  },
  {
    id: 3,
    icon: PackageCheck,
    number: "03",
    title: "Booth Packet",
    hindi: "Booth की तैयारी",
    description:
      "Booth Packet ke liye required campaign items ko ek organised package ke form mein arrange karne ka option.",
  },
  {
    id: 4,
    icon: Truck,
    number: "04",
    title: "Campaign Vehicles",
    hindi: "चुनाव प्रचार वाहन",
    description:
      "Campaign Bike aur LED Promotion Vehicle jaise options ke through ground-level campaign support.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="about"
      className="why-section"
    >
      <div className="why-container">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="why-heading">

          <div className="section-label">
            Why Election Kart
          </div>

          <h2>
            Campaign Ke Liye
            <span> Complete Support</span>
          </h2>

          <p>
            चुनाव प्रचार की अलग-अलग जरूरतों के लिए
            products, booth materials aur promotion options.
          </p>

        </div>


        {/* =====================================================
            MAIN LAYOUT
        ===================================================== */}

        <div className="why-layout">

          {/* =================================================
              LEFT INTRO
          ================================================= */}

          <div className="why-intro">

            <div className="why-intro-number">
              EK
            </div>

            <h3>
              हर चुनाव की
              <br />
              <span>अपनी जरूरत होती है.</span>
            </h3>

            <p>
              Isliye Election Kart par campaign products
              se lekar booth packet aur promotion vehicles
              tak multiple options ko ek organised platform
              par present kiya gaya hai.
            </p>

            <div className="why-tag">

              <Megaphone size={17} />

              <span>
                हर चुनाव का भरोसेमंद साथी
              </span>

            </div>

          </div>


          {/* =================================================
              FEATURE CARDS
          ================================================= */}

          <div className="why-grid">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <article
                  className="why-card"
                  key={feature.id}
                >

                  <div className="why-card-top">

                    <span className="why-number">
                      {feature.number}
                    </span>

                    <div className="why-icon">
                      <Icon size={21} />
                    </div>

                  </div>


                  <h3>
                    {feature.title}
                  </h3>


                  <div className="why-hindi">
                    {feature.hindi}
                  </div>


                  <p>
                    {feature.description}
                  </p>


                  <div className="why-card-line"></div>

                </article>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}