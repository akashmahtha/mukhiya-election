import {
  ArrowUpRight,
  Camera,
} from "lucide-react";

import "../styles/gallery.css";

const galleryImages = [
  {
    id: 1,
    image: "/images/gallery/gallery-1.jpg",
  },
  {
    id: 2,
    image: "/images/gallery/gallery-2.jpg",
  },
  {
    id: 3,
    image: "/images/gallery/gallery-3.jpg",
  },
  {
    id: 4,
    image: "/images/gallery/gallery-4.jpg",
  },
  {
    id: 5,
    image: "/images/gallery/gallery-5.jpg",
  },
  {
    id: 6,
    image: "/images/gallery/gallery-6.jpg",
  },
  {
    id: 7,
    image: "/images/gallery/gallery-7.jpg",
  },
  {
    id: 8,
    image: "/images/gallery/gallery-8.jpg",
  },
  {
    id: 9,
    image: "/images/gallery/gallery-9.jpg",
  },
  {
    id: 10,
    image: "/images/gallery/gallery-10.jpg",
  },
  {
    id: 11,
    image: "/images/gallery/gallery-11.jpg",
  },
  {
    id: 12,
    image: "/images/gallery/gallery-12.jpg",
  },
  {
    id: 13,
    image: "/images/gallery/gallery-13.jpg",
  },
  {
    id: 14,
    image: "/images/gallery/gallery-14.jpg",
  },
  {
    id: 15,
    image: "/images/gallery/gallery-15.jpg",
  },
  {
    id: 16,
    image: "/images/gallery/gallery-16.jpg",
  },
  {
    id: 17,
    image: "/images/gallery/gallery-17.jpg",
  },
  {
    id: 18,
    image: "/images/gallery/gallery-18.jpg",
  },
  {
    id: 19,
    image: "/images/gallery/gallery-19.jpg",
  },
  {
    id: 20,
    image: "/images/gallery/gallery-20.jpg",
  },
  {
    id: 21,
    image: "/images/gallery/gallery-21.jpg",
  },
  {
    id: 22,
    image: "/images/gallery/gallery-22.jpg",
  },
  {
    id: 23,
    image: "/images/gallery/gallery-23.jpg",
  },
  {
    id: 24,
    image: "/images/gallery/gallery-24.jpg",
  },
  {
    id: 25,
    image: "/images/gallery/gallery-25.jpg",
  },
  {
    id: 26,
    image: "/images/gallery/gallery-26.jpg",
  },
  {
    id: 27,
    image: "/images/gallery/gallery-27.jpg",
  },
  {
    id: 28,
    image: "/images/gallery/gallery-28.jpg",
  },
  {
    id: 29,
    image: "/images/gallery/gallery-29.jpg",
  },
  {
    id: 30,
    image: "/images/gallery/gallery-30.jpg",
  },
  {
    id: 31,
    image: "/images/gallery/gallery-31.jpg",
  },
  {
    id: 32,
    image: "/images/gallery/gallery-32.jpg",
  },
  {
    id: 33,
    image: "/images/gallery/gallery-33.jpg",
  },
  {
    id: 34,
    image: "/images/gallery/gallery-34.jpg",
  },
  {
    id: 35,
    image: "/images/gallery/gallery-35.jpg",
  },
  {
    id: 36,
    image: "/images/gallery/gallery-36.jpg",
  },
  {
    id: 37,
    image: "/images/gallery/gallery-37.jpg",
  },
  {
    id: 38,
    image: "/images/gallery/gallery-38.jpg",
  },
  {
    id: 39,
    image: "/images/gallery/gallery-39.jpg",
  },
  {
    id: 40,
    image: "/images/gallery/gallery-40.jpg",
  },
  {
    id: 41,
    image: "/images/gallery/gallery-41.jpg",
  },
  {
    id: 42,
    image: "/images/gallery/gallery-42.jpg",
  },
  {
    id: 43,
    image: "/images/gallery/gallery-43.jpg",
  },
  {
    id: 44,
    image: "/images/gallery/gallery-44.jpg",
  },
  {
    id: 45,
    image: "/images/gallery/gallery-45.jpg",
  },
  {
    id: 46,
    image: "/images/gallery/gallery-46.jpg",
  },
  {
    id: 47,
    image: "/images/gallery/gallery-47.jpg",
  },
  {
    id: 48,
    image: "/images/gallery/gallery-48.jpg",
  },
  {
    id: 49,
    image: "/images/gallery/gallery-49.jpg",
  },
  {
    id: 50,
    image: "/images/gallery/gallery-50.jpg",
  },
  {
    id: 51,
    image: "/images/gallery/gallery-51.jpg",
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
        ====================================================== */}

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
        ====================================================== */}

        <div className="gallery-grid">

          {galleryImages.map((item, index) => (

            <article
              className={`gallery-card gallery-card-${index + 1}`}
              key={item.id}
            >

              <div className="gallery-image">

                <img
                  src={item.image}
                  alt={`Campaign gallery image ${item.id}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />

              </div>

            </article>

          ))}

        </div>


        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

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