import {
  ArrowUpRight,
  BadgeCheck,
  ClipboardList,
  FileText,
  Flag,
  PackageCheck,
  PenLine,
  Shirt,
  Sticker,
} from "lucide-react";

import "../styles/boothPacket.css";

const campaignKits = [
  {
    id: 1,
    number: "01",
    title: "Basic Campaign Kit",
    hindi: "बेसिक प्रचार किट",
    icon: PackageCheck,
    description:
      "Campaign की basic promotional requirements के लिए compact campaign kit.",
    items: [
      "Poster",
      "Pamphlet",
      "Sticker",
      "Flag",
      "Badge",
      "Cap",
      "Gamcha",
      "Visiting Card",
    ],
  },

  {
    id: 2,
    number: "02",
    title: "Team Campaign Kit",
    hindi: "टीम कैंपेन किट",
    icon: Shirt,
    description:
      "Campaign volunteers और authorized team members के लिए branded team kit.",
    items: [
      "ID Card",
      "T-Shirt",
      "Cap",
      "Gamcha",
      "Badge",
      "Campaign Folder",
      "Diary",
      "Pen",
    ],
  },

  {
    id: 3,
    number: "03",
    title: "Booth / Area Kit",
    hindi: "बूथ एवं एरिया किट",
    icon: ClipboardList,
    description:
      "Area-wise campaign activities के लिए आवश्यक material और stationery को व्यवस्थित रूप से तैयार किया जा सकता है.",
    items: [
      "Area Posters",
      "Pamphlets",
      "Stickers",
      "Flags",
      "Volunteer ID Cards",
      "Reporting Sheets",
      "Stationery",
      "Campaign Material",
    ],
  },
];

const kitHighlights = [
  {
    icon: FileText,
    title: "Printed Materials",
    text: "Poster, pamphlet, sticker & campaign literature",
  },
  {
    icon: Flag,
    title: "Campaign Branding",
    text: "Flags, badges, caps & branded materials",
  },
  {
    icon: BadgeCheck,
    title: "Team Identity",
    text: "ID cards, T-shirts, lanyards & volunteer branding",
  },
  {
    icon: PenLine,
    title: "Campaign Stationery",
    text: "Diary, pen, reporting sheets & required stationery",
  },
];

export default function BoothPacket() {
  return (
    <section
      id="booth-packet"
      className="booth-section"
    >
      <div className="booth-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="booth-header">

          <div className="section-label">
            Campaign Kits
          </div>

          <h2>
            Campaign Kit
            <span>
              आपकी जरूरत के अनुसार
            </span>
          </h2>

          <p>
            Basic campaign requirements से लेकर Team और
            Booth/Area level material तक — campaign kit को
            आपकी आवश्यकता के अनुसार organise किया जा सकता है।
          </p>

        </div>


        {/* =====================================================
            KIT CARDS
        ===================================================== */}

        <div className="booth-grid">

          {campaignKits.map((kit) => {

            const Icon = kit.icon;

            return (
              <article
                className="booth-card"
                key={kit.id}
              >

                {/* Top */}

                <div className="booth-card-top">

                  <span className="booth-number">
                    {kit.number}
                  </span>

                  <div className="booth-icon">
                    <Icon size={20} />
                  </div>

                </div>


                {/* Title */}

                <h3>
                  {kit.title}
                </h3>

                <div className="booth-hindi">
                  {kit.hindi}
                </div>


                {/* Description */}

                <p>
                  {kit.description}
                </p>


                {/* Items */}

                <div className="booth-items">

                  {kit.items.map((item) => (

                    <div
                      key={item}
                    >
                      <span></span>
                      {item}
                    </div>

                  ))}

                </div>


                {/* Link */}

                <a
                  href="#contact"
                  className="booth-card-link"
                >
                  Kit Enquiry
                  <ArrowUpRight size={15} />
                </a>

              </article>
            );
          })}

        </div>


        {/* =====================================================
            HIGHLIGHTS
        ===================================================== */}

        <div className="booth-highlights">

          <div className="booth-highlights-heading">

            <span>
              WHAT'S INCLUDED
            </span>

            <h3>
              Campaign की
              <strong>
                जरूरी सामग्री।
              </strong>
            </h3>

          </div>


          <div className="booth-highlights-grid">

            {kitHighlights.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  className="booth-highlight"
                  key={item.title}
                >

                  <div className="booth-highlight-icon">
                    <Icon size={17} />
                  </div>

                  <div>

                    <strong>
                      {item.title}
                    </strong>

                    <span>
                      {item.text}
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="booth-cta">

          <div>

            <span>
              CUSTOM CAMPAIGN KIT
            </span>

            <h3>
              आपकी requirement,
              <strong>
                आपका Campaign Kit.
              </strong>
            </h3>

            <p>
              Campaign scope और material requirements के
              अनुसार customised kit तैयार की जा सकती है।
            </p>

          </div>


          <a
            href="https://wa.me/919820280493"
            target="_blank"
            rel="noreferrer"
            className="booth-cta-btn"
          >
            Get Kit Details
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}