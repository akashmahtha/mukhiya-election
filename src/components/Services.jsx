import {
  ArrowUpRight,
  BarChart3,
  Brush,
  CarFront,
  ClipboardCheck,
  Flag,
  Image,
  Megaphone,
  Package,
  Printer,
  Radio,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Video,
} from "lucide-react";

import "../styles/services.css";

const services = [
  {
    id: 1,
    number: "01",
    icon: ClipboardCheck,
    title: "Campaign Planning",
    hindi: "चुनावी कैंपेन प्लानिंग",
    description:
      "Campaign planning, क्षेत्रवार schedule, प्रचार सामग्री planning, ground activity और campaign coordination.",
    items: [
      "Campaign Planning",
      "Area-wise Schedule",
      "Ground Activity Planning",
      "Daily Campaign Schedule",
      "Campaign Reporting",
    ],
  },

  {
    id: 2,
    number: "02",
    icon: Printer,
    title: "Election Printing",
    hindi: "चुनावी प्रचार सामग्री",
    description:
      "मुखिया एवं पंचायत चुनाव के लिए posters, banners, flex, pamphlets और अन्य printed materials.",
    items: [
      "Poster & Banner",
      "Flex & Vinyl",
      "Pamphlet & Handbill",
      "Hoarding",
      "Sunboard & ACP Board",
    ],
  },

  {
    id: 3,
    number: "03",
    icon: Flag,
    title: "Election Branding",
    hindi: "फ्लैग एवं ब्रांडिंग",
    description:
      "Campaign visibility बढ़ाने के लिए flags, banners, poles, stage branding और event branding.",
    items: [
      "Election Flags",
      "Flag Poles",
      "Banner Poles",
      "Roadside Flags",
      "Stage Backdrop",
    ],
  },

  {
    id: 4,
    number: "04",
    icon: Package,
    title: "Campaign Merchandise",
    hindi: "पहनने योग्य प्रचार सामग्री",
    description:
      "Candidate और authorized campaign volunteers के लिए branded promotional merchandise.",
    items: [
      "Gamcha & Patka",
      "Cap & T-Shirt",
      "Jacket & Scarf",
      "Badge & Button",
      "ID Card & Lanyard",
    ],
  },

  {
    id: 5,
    number: "05",
    icon: Package,
    title: "Campaign Kits",
    hindi: "संपूर्ण प्रचार किट",
    description:
      "Basic, Team और Booth/Area requirements के अनुसार complete campaign kits तैयार की जा सकती हैं.",
    items: [
      "Basic Campaign Kit",
      "Team Campaign Kit",
      "Booth / Area Kit",
      "Volunteer Kit",
      "Campaign Stationery",
    ],
  },

  {
    id: 6,
    number: "06",
    icon: Smartphone,
    title: "Digital Campaign",
    hindi: "डिजिटल चुनाव प्रचार",
    description:
      "Campaign के लिए social media creatives, WhatsApp content, reels, videos और digital communication.",
    items: [
      "Facebook Creatives",
      "Instagram Creatives",
      "WhatsApp Posters",
      "Reels & Short Videos",
      "Campaign Graphics",
    ],
  },

  {
    id: 7,
    number: "07",
    icon: Radio,
    title: "WhatsApp & SMS",
    hindi: "डिजिटल कम्युनिकेशन सपोर्ट",
    description:
      "Authorized campaign communication के लिए WhatsApp, SMS और voice communication support.",
    items: [
      "WhatsApp Creative",
      "WhatsApp Video",
      "SMS Content",
      "Bulk SMS Coordination",
      "Voice Message",
    ],
  },

  {
    id: 8,
    number: "08",
    icon: Brush,
    title: "Graphic Design",
    hindi: "ग्राफिक्स एवं डिजाइन",
    description:
      "Professional campaign creatives और branding designs आपकी campaign identity के अनुसार.",
    items: [
      "Candidate Poster",
      "Election Poster",
      "Banner & Flex Design",
      "Social Media Post",
      "LED Screen Content",
    ],
  },

  {
    id: 9,
    number: "09",
    icon: Printer,
    title: "Printing Services",
    hindi: "प्रोफेशनल प्रिंटिंग",
    description:
      "Different campaign requirements के लिए large-format और commercial printing solutions.",
    items: [
      "Flex Printing",
      "Star Flex",
      "Vinyl Printing",
      "UV Printing",
      "Digital & Offset Printing",
    ],
  },

  {
    id: 10,
    number: "10",
    icon: Users,
    title: "Ground Campaign",
    hindi: "जनसंपर्क एवं ग्राउंड सपोर्ट",
    description:
      "Authorized campaign teams के लिए ground-level campaign activities का operational coordination.",
    items: [
      "Door-to-Door Coordination",
      "Public Meeting",
      "Nukkad Sabha",
      "Roadshow Coordination",
      "Volunteer Coordination",
    ],
  },

  {
    id: 11,
    number: "11",
    icon: CarFront,
    title: "Campaign Vehicles",
    hindi: "प्रचार वाहन",
    description:
      "Panchayat area में mobile campaign communication के लिए LED, audio और branded vehicle solutions.",
    items: [
      "LED Van",
      "LED Screen",
      "Audio Vehicle",
      "Auto Branding",
      "Vehicle Stickers",
    ],
  },

  {
    id: 12,
    number: "12",
    icon: Settings,
    title: "Event Management",
    hindi: "सभा एवं कार्यक्रम प्रबंधन",
    description:
      "छोटी meeting से लेकर बड़े public events तक आवश्यक event infrastructure coordination.",
    items: [
      "Stage & Backdrop",
      "Sound System",
      "LED Screen",
      "Lighting & Generator",
      "Chairs & Tent",
    ],
  },

  {
    id: 13,
    number: "13",
    icon: Megaphone,
    title: "Nukkad Sabha",
    hindi: "स्थानीय कार्यक्रम",
    description:
      "Local-level campaign events के लिए portable setup, branding और basic event support.",
    items: [
      "Portable Stage",
      "Sound System",
      "Chairs",
      "Backdrop",
      "Event Branding",
    ],
  },

  {
    id: 14,
    number: "14",
    icon: Video,
    title: "Photo & Video",
    hindi: "फोटोग्राफी एवं वीडियोग्राफी",
    description:
      "Campaign और events का professional visual documentation और content production.",
    items: [
      "Event Photography",
      "Candidate Photography",
      "Video Coverage",
      "Reels",
      "Event Highlights",
    ],
  },

  {
    id: 15,
    number: "15",
    icon: BarChart3,
    title: "Campaign Reporting",
    hindi: "डॉक्यूमेंटेशन एवं रिपोर्टिंग",
    description:
      "Campaign activities, events और material movement को व्यवस्थित रखने के लिए documentation support.",
    items: [
      "Daily Activity Report",
      "Event Report",
      "Photo Documentation",
      "Material Dispatch Report",
      "Area-wise Activity Report",
    ],
  },

  {
    id: 16,
    number: "16",
    icon: Sparkles,
    title: "Campaign Merchandise",
    hindi: "प्रमोशनल मर्चेंडाइज",
    description:
      "Campaign requirements के अनुसार branded promotional products और merchandise.",
    items: [
      "Pen & Diary",
      "Calendar",
      "Keychain & Bag",
      "Badge & Button",
      "Cap & T-Shirt",
    ],
  },

  {
    id: 17,
    number: "17",
    icon: Image,
    title: "Campaign Office",
    hindi: "चुनावी कार्यालय सपोर्ट",
    description:
      "Campaign office के लिए branding, stationery, information boards और operational setup support.",
    items: [
      "Office Branding",
      "Reception Board",
      "Information Board",
      "Campaign Files",
      "Stationery",
    ],
  },

  {
    id: 18,
    number: "18",
    icon: ShieldCheck,
    title: "Election Day Support",
    hindi: "निर्वाचन दिवस सपोर्ट",
    description:
      "निर्वाचन दिवस पर कानूनी एवं प्रशासनिक रूप से अनुमत operational और communication coordination.",
    items: [
      "Team Coordination",
      "Authorized Personnel",
      "Transport Coordination",
      "Information Desk",
      "Documentation",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="services-section"
    >
      <div className="services-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="services-header">

          <div className="section-label">
            Our Services
          </div>

          <h2>
            आपकी Campaign की
            <span>
              हर जरूरत का समाधान
            </span>
          </h2>

          <p>
            Strategy से लेकर Design, Printing, Branding,
            Digital, Ground Campaign और Documentation तक —
            एक ही जगह complete campaign support.
          </p>

        </div>


        {/* =====================================================
            CAMPAIGN FLOW
        ===================================================== */}

        <div className="services-flow">

          <div className="services-flow-item">
            <span>01</span>
            <strong>PLAN</strong>
            <small>Campaign Strategy</small>
          </div>

          <div className="services-flow-line"></div>

          <div className="services-flow-item">
            <span>02</span>
            <strong>DESIGN</strong>
            <small>Creative Production</small>
          </div>

          <div className="services-flow-line"></div>

          <div className="services-flow-item">
            <span>03</span>
            <strong>PRINT</strong>
            <small>Campaign Materials</small>
          </div>

          <div className="services-flow-line"></div>

          <div className="services-flow-item">
            <span>04</span>
            <strong>DIGITAL</strong>
            <small>Digital Content</small>
          </div>

          <div className="services-flow-line"></div>

          <div className="services-flow-item">
            <span>05</span>
            <strong>GROUND</strong>
            <small>Campaign Execution</small>
          </div>

        </div>


        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div className="services-grid">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.id}
              >

                {/* Card Top */}

                <div className="service-card-top">

                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-icon">
                    <Icon size={19} />
                  </div>

                </div>


                {/* Title */}

                <h3>
                  {service.title}
                </h3>

                <div className="service-hindi">
                  {service.hindi}
                </div>


                {/* Description */}

                <p>
                  {service.description}
                </p>


                {/* Items */}

                <div className="service-items">

                  {service.items.map((item) => (

                    <div
                      key={item}
                    >
                      <span></span>
                      {item}
                    </div>

                  ))}

                </div>


                {/* Bottom */}

                <a
                  href="#contact"
                  className="service-link"
                >
                  Enquiry Karein
                  <ArrowUpRight size={15} />
                </a>

              </article>
            );
          })}

        </div>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div className="services-cta">

          <div>

            <span>
              COMPLETE CAMPAIGN SUPPORT
            </span>

            <h3>
              Strategy से
              <strong>
                Ground Execution तक।
              </strong>
            </h3>

          </div>

          <a
            href="https://wa.me/919820280493"
            target="_blank"
            rel="noreferrer"
            className="services-cta-btn"
          >
            Campaign Enquiry
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}