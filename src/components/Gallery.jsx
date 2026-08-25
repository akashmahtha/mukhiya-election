import {
  ArrowUpRight,
  Camera,
  Maximize2,
} from "lucide-react";

import "../styles/gallery.css";

const galleryImages = [
  {
    id: 1,
    image: "/images/gallery/gallery-1.jpg",
    title: "Campaign Activity",
    category: "Ground Campaign",
  },
  {
    id: 2,
    image: "/images/gallery/gallery-2.jpg",
    title: "Election Branding",
    category: "Campaign Branding",
  },
  {
    id: 3,
    image: "/images/gallery/gallery-3.jpg",
    title: "Public Campaign",
    category: "Ground Activity",
  },
  {
    id: 4,
    image: "/images/gallery/gallery-4.jpg",
    title: "Campaign Event",
    category: "Event Management",
  },
  {
    id: 5,
    image: "/images/gallery/gallery-5.jpg",
    title: "Promotional Work",
    category: "Campaign Promotion",
  },
  {
    id: 6,
    image: "/images/gallery/gallery-6.jpg",
    title: "Campaign Support",
    category: "Election Campaign",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="gallery-section"
    >
      <div className="gallery-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="gallery-header">

          <div className="section-label">
            Campaign Gallery
          </div>

          <h2>
            हमारे Campaign Work की
            <span>
              कुछ झलकियां।
            </span>
          </h2>

          <p>
            Campaign branding, ground activities, events और
            promotional work से जुड़ी कुछ selected highlights.
          </p>

        </div>


        {/* =====================================================
            GALLERY GRID
        ===================================================== */}

        <div className="gallery-grid">

          {galleryImages.map((item, index) => (

            <article
              className={`gallery-card gallery-card-${index + 1}`}
              key={item.id}
            >

              <div className="gallery-image">

                <img
                  src={item.image}
                  alt={item.title}
                  loading={index === 0 ? "eager" : "lazy"}
                />


                <div className="gallery-overlay"></div>


                {/* Category */}

                <span className="gallery-category">
                  {item.category}
                </span>


                {/* Expand Icon */}

                <div className="gallery-expand">
                  <Maximize2 size={16} />
                </div>


                {/* Bottom Content */}

                <div className="gallery-image-content">

                  <span>
                    0{item.id}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =====================================================
            GALLERY BOTTOM
        ===================================================== */}

        <div className="gallery-bottom">

          <div className="gallery-bottom-icon">
            <Camera size={19} />
          </div>

          <div className="gallery-bottom-content">

            <span>
              CAMPAIGN WORK
            </span>

            <h3>
              आपके Campaign की
              <strong>
                अगली कहानी यहां से शुरू करें।
              </strong>
            </h3>

          </div>


          <a
            href="#contact"
            className="gallery-bottom-btn"
          >
            Start Your Campaign
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </section>
  );
}