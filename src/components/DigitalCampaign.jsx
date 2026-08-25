import {
  ArrowUpRight,
  MessageCircle,
  Smartphone,
  Video,
  Share2,
  Radio,
  Image,
  PlayCircle,
} from "lucide-react";

import "../styles/digitalCampaign.css";


/* =====================================================
   DIGITAL SERVICES
===================================================== */

const digitalServices = [
  {
    icon: Share2,
    title: "Social Media Campaign",
    hindi: "सोशल मीडिया प्रचार",
    items: [
      "Instagram Creatives",
      "YouTube Promotion",
      "Social Media Posts",
      "Campaign Graphics",
    ],
  },

  {
    icon: MessageCircle,
    title: "WhatsApp Campaign",
    hindi: "व्हाट्सएप कैंपेन",
    items: [
      "WhatsApp Creatives",
      "WhatsApp Posters",
      "Campaign Videos",
      "Announcement Messages",
    ],
  },

  {
    icon: Smartphone,
    title: "SMS & Voice Campaign",
    hindi: "SMS एवं Voice Communication",
    items: [
      "SMS Content",
      "Bulk SMS Coordination",
      "Voice Messages",
      "IVR / Voice Communication",
    ],
  },

  {
    icon: Video,
    title: "Video Production",
    hindi: "चुनावी वीडियो प्रोडक्शन",
    items: [
      "Candidate Introduction",
      "Campaign Videos",
      "Development Videos",
      "Video Editing",
    ],
  },

  {
    icon: PlayCircle,
    title: "Short Video & Reels",
    hindi: "शॉर्ट वीडियो एवं रील्स",
    items: [
      "Short Campaign Videos",
      "Reels",
      "Photo-to-Video",
      "Event Highlights",
    ],
  },

  {
    icon: Image,
    title: "Digital Creatives",
    hindi: "डिजिटल क्रिएटिव डिजाइन",
    items: [
      "Candidate Posters",
      "Event Creatives",
      "Festival Creatives",
      "Announcement Creatives",
    ],
  },
];


/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function DigitalCampaign() {
  return (
    <section
      id="digital-campaign"
      className="digital-campaign-section"
    >

      <div className="digital-campaign-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="digital-campaign-header">

          <div className="section-label">
            Digital Election Campaign
          </div>

          <h2>
            Digital प्रचार को बनाएं
            <span>
              ज्यादा प्रभावी।
            </span>
          </h2>

          <p>
            आज के चुनाव अभियान में digital communication
            भी एक महत्वपूर्ण माध्यम है। हम campaign के लिए
            creative production और digital content support
            उपलब्ध कराते हैं।
          </p>

        </div>


        {/* =================================================
            FEATURE
        ================================================= */}

        <div className="digital-campaign-feature">


          {/* LEFT */}

          <div className="digital-campaign-feature-content">

            <span className="digital-campaign-feature-label">
              DIGITAL CAMPAIGN SUPPORT
            </span>

            <h3>
              आपकी Campaign Story
              <span>
                Digital दुनिया तक।
              </span>
            </h3>

            <p>
              Candidate introduction से लेकर campaign
              videos, WhatsApp creatives, social media
              posts, reels और event content तक —
              campaign requirements के अनुसार digital
              content तैयार किया जा सकता है।
            </p>


            {/* FEATURES */}

            <div className="digital-campaign-points">

              <div>
                <Share2 size={15} />
                Social Media Creatives
              </div>

              <div>
                <MessageCircle size={15} />
                WhatsApp Campaign
              </div>

              <div>
                <Video size={15} />
                Video & Reels
              </div>

              <div>
                <Radio size={15} />
                SMS & Voice Support
              </div>

            </div>


            {/* CTA */}

            <a
              href="#contact"
              className="digital-campaign-btn"
            >
              Digital Campaign Enquiry
              <ArrowUpRight size={16} />
            </a>

          </div>


          {/* RIGHT VISUAL */}

          <div className="digital-campaign-feature-visual">

            <div className="digital-campaign-glow"></div>

            <div className="digital-campaign-circle circle-one"></div>

            <div className="digital-campaign-circle circle-two"></div>


            {/* PHONE */}

            <div className="digital-phone">

              <div className="digital-phone-top">

                <span>
                  Campaign
                </span>

                <span>
                  ●
                </span>

              </div>


              <div className="digital-phone-screen">

                <div className="digital-screen-badge">
                  MUKHIYA ELECTION
                </div>

                <div className="digital-screen-title">
                  आपका Campaign
                  <strong>
                    Digital Ready
                  </strong>
                </div>

                <div className="digital-screen-items">

                  <div>
                    <Share2 size={14} />
                    Social Media
                  </div>

                  <div>
                    <MessageCircle size={14} />
                    WhatsApp
                  </div>

                  <div>
                    <Video size={14} />
                    Video
                  </div>

                </div>

              </div>

            </div>


            {/* FLOATING CARD */}

            <div className="digital-floating-card digital-floating-one">

              <Share2 size={16} />

              <div>
                <strong>
                  Digital
                </strong>

                <span>
                  Campaign Ready
                </span>
              </div>

            </div>


            <div className="digital-floating-card digital-floating-two">

              <Video size={16} />

              <div>
                <strong>
                  Video
                </strong>

                <span>
                  Reels & Content
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            SERVICES GRID
        ================================================= */}

        <div className="digital-services-grid">

          {digitalServices.map((service) => {

            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="digital-service-card"
              >

                {/* ICON */}

                <div className="digital-service-icon">

                  <Icon size={21} />

                </div>


                {/* TITLE */}

                <h3>
                  {service.title}
                </h3>


                {/* HINDI */}

                <div className="digital-service-hindi">
                  {service.hindi}
                </div>


                {/* LIST */}

                <div className="digital-service-list">

                  {service.items.map((item) => (

                    <div
                      key={item}
                    >

                      <span></span>

                      {item}

                    </div>

                  ))}

                </div>

              </article>
            );

          })}

        </div>


        {/* =================================================
            WHATSAPP / SMS SUPPORT
        ================================================= */}

        <div className="digital-campaign-support">

          <div className="digital-support-icon">

            <MessageCircle size={22} />

          </div>


          <div className="digital-support-content">

            <span>
              CAMPAIGN COMMUNICATION
            </span>

            <h3>
              WhatsApp • SMS • Voice
              <strong>
                Campaign Support
              </strong>
            </h3>

            <p>
              WhatsApp creatives, SMS content, voice
              messages और campaign announcements की
              तैयारी में सहायता उपलब्ध कराई जा सकती है।
            </p>

          </div>


          <a
            href="#contact"
            className="digital-support-btn"
          >
            Get Details
            <ArrowUpRight size={16} />
          </a>

        </div>


        {/* =================================================
            VIDEO PRODUCTION
        ================================================= */}

        <div className="digital-video-section">

          <div className="digital-video-heading">

            <span>
              VIDEO PRODUCTION
            </span>

            <h3>
              Campaign के लिए
              <strong>
                Video Content
              </strong>
            </h3>

          </div>


          <div className="digital-video-items">

            <div className="digital-video-item">

              <div className="digital-video-item-icon">
                <Video size={18} />
              </div>

              <div>

                <strong>
                  Candidate Introduction
                </strong>

                <span>
                  उम्मीदवार परिचय वीडियो
                </span>

              </div>

            </div>


            <div className="digital-video-item">

              <div className="digital-video-item-icon">
                <PlayCircle size={18} />
              </div>

              <div>

                <strong>
                  Campaign Videos
                </strong>

                <span>
                  चुनावी प्रचार वीडियो
                </span>

              </div>

            </div>


            <div className="digital-video-item">

              <div className="digital-video-item-icon">
                <Share2 size={18} />
              </div>

              <div>

                <strong>
                  Reels & Shorts
                </strong>

                <span>
                  Short-form campaign content
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <div className="digital-campaign-bottom">

          <div>

            <span>
              DIGITAL CAMPAIGN SUPPORT
            </span>

            <h3>
              Strategy • Creative •
              <strong>
                Content
              </strong>
            </h3>

            <p>
              Campaign requirements के अनुसार digital
              content और communication solutions तैयार
              किए जा सकते हैं।
            </p>

          </div>


          <a
            href="https://wa.me/919820280493"
            target="_blank"
            rel="noopener noreferrer"
            className="digital-campaign-bottom-btn"
          >

            <MessageCircle size={17} />

            WhatsApp Enquiry

            <ArrowUpRight size={16} />

          </a>

        </div>

      </div>

    </section>
  );
}