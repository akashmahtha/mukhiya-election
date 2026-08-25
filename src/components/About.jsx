import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Target,
  Users,
  Zap,
} from "lucide-react";

import "../styles/about.css";

const supportPoints = [
  "Complete Campaign Support",
  "Professional Designing",
  "Quality Printing",
  "Campaign Merchandise",
  "Digital Content Production",
  "Ground Activity Coordination",
  "Event Management",
  "Campaign Documentation",
];

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
    >
      <div className="about-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="about-header">

          <div className="section-label">
            About Mukhiya Election
          </div>

          <h2>
            बिहार मुखिया चुनाव में
            <span>
              आपका विश्वसनीय चुनावी सहयोगी
            </span>
          </h2>

          <p>
            रणनीति से लेकर प्रचार सामग्री और ग्राउंड
            एक्सीक्यूशन तक — आपके चुनाव अभियान के लिए
            एक ही जगह संपूर्ण Campaign Support.
          </p>

        </div>


        {/* =====================================================
            MAIN ABOUT GRID
        ===================================================== */}

        <div className="about-main">


          {/* =================================================
              LEFT STORY
          ================================================= */}

          <div className="about-story">

            <div className="about-story-label">
              BIHAR MUKHIYA ELECTION 2026
            </div>

            <h3>
              चुनाव प्रचार को
              <span>
                व्यवस्थित और प्रभावशाली बनाएं।
              </span>
            </h3>

            <p>
              बिहार में मुखिया चुनाव केवल प्रतिनिधि चुनने
              की प्रक्रिया नहीं, बल्कि गांव के विकास,
              सुशासन और जनभागीदारी का महत्वपूर्ण अवसर है।
            </p>

            <p>
              एक प्रभावी चुनाव अभियान के लिए सही planning,
              professional प्रचार सामग्री, creative
              communication और ground-level coordination
              की आवश्यकता होती है।
            </p>

            <p>
              हम उम्मीदवारों और उनकी अधिकृत चुनावी टीमों
              को integrated campaign support services
              उपलब्ध कराते हैं, ताकि campaign की
              आवश्यकताओं को एक व्यवस्थित service structure
              के माध्यम से manage किया जा सके।
            </p>


            {/* CTA */}

            <a
              href="#services"
              className="about-story-btn"
            >
              Explore Campaign Services

              <ArrowUpRight size={16} />
            </a>

          </div>


          {/* =================================================
              RIGHT FEATURE PANEL
          ================================================= */}

          <div className="about-feature-panel">

            <div className="about-panel-top">

              <span>
                COMPLETE SOLUTION
              </span>

              <div className="about-panel-icon">
                <Target size={19} />
              </div>

            </div>


            <h3>
              एक Campaign.
              <span>
                सभी Solutions.
              </span>
            </h3>


            <p>
              अलग-अलग vendors से campaign की अलग-अलग
              services manage करने के बजाय आवश्यक
              campaign support को एक integrated structure
              में organise किया जा सकता है।
            </p>


            {/* Feature Items */}

            <div className="about-feature-list">

              <div>
                <div className="about-feature-icon">
                  <Zap size={16} />
                </div>

                <div>
                  <strong>
                    Modern Campaign Support
                  </strong>

                  <span>
                    Technology & creative driven execution
                  </span>
                </div>
              </div>


              <div>
                <div className="about-feature-icon">
                  <Users size={16} />
                </div>

                <div>
                  <strong>
                    Campaign Team Coordination
                  </strong>

                  <span>
                    Organised support for campaign teams
                  </span>
                </div>
              </div>


              <div>
                <div className="about-feature-icon">
                  <MapPin size={16} />
                </div>

                <div>
                  <strong>
                    Bihar-wide Campaign Support
                  </strong>

                  <span>
                    Services based on project scope & location
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            SUPPORT STRIP
        ===================================================== */}

        <div className="about-support">

          <div className="about-support-heading">

            <span>
              WHAT WE SUPPORT
            </span>

            <h3>
              Campaign की हर
              <strong>
                महत्वपूर्ण जरूरत।
              </strong>
            </h3>

          </div>


          <div className="about-support-grid">

            {supportPoints.map((point) => (

              <div
                className="about-support-item"
                key={point}
              >

                <CheckCircle2 size={15} />

                <span>
                  {point}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* =====================================================
            BIHAR SERVICE AREA
        ===================================================== */}

        <div className="about-location">

          <div className="about-location-icon">
            <MapPin size={21} />
          </div>

          <div>

            <span>
              CAMPAIGN SUPPORT NETWORK
            </span>

            <h3>
              पूरे बिहार में सेवाएं
            </h3>

            <p>
              Patna • Darbhanga • Muzaffarpur • Gaya •
              Bhagalpur • Purnia • Begusarai • Samastipur •
              Madhubani • Sitamarhi • Supaul • Saharsa •
              Araria • Katihar और अन्य बिहार क्षेत्र।
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}