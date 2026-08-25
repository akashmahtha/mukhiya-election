import { ArrowUpRight, Images } from "lucide-react";

import galleryItems from "../data/gallery";

import "../styles/gallery.css";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="gallery-section"
    >
      <div className="gallery-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="gallery-header">

          <div className="section-label">
            Our Gallery
          </div>

          <h2>
            Campaign Ki
            <span> Ek Jhalak</span>
          </h2>

          <p>
            Election campaign materials, branding aur
            promotional work ki kuch visual glimpses.
          </p>

        </div>


        {/* =================================================
            GALLERY GRID
        ================================================= */}

        <div className="gallery-grid">

          {galleryItems.length > 0 ? (

            galleryItems.map((item, index) => (

              <article
                className={`gallery-item gallery-item-${index + 1}`}
                key={item.id}
              >

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="gallery-image">

                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.category}`}
                    className="gallery-img"
                    loading="lazy"
                  />


                  {/* =================================================
                      OVERLAY
                  ================================================= */}

                  <div className="gallery-overlay">

                    <div className="gallery-overlay-content">

                      <span>
                        {item.category}
                      </span>

                      <h3>
                        {item.title}
                      </h3>

                    </div>


                    <div className="gallery-arrow">

                      <ArrowUpRight
                        size={18}
                      />

                    </div>

                  </div>

                </div>

              </article>

            ))

          ) : (

            /* =================================================
               EMPTY STATE
            ================================================= */

            <div className="gallery-empty">

              <Images size={35} />

              <h3>
                Gallery Coming Soon
              </h3>

              <p>
                Campaign designs aur materials
                yahan add kiye jayenge.
              </p>

            </div>

          )}

        </div>


        {/* =================================================
            GALLERY CTA
        ================================================= */}

        <div className="gallery-bottom">

          <p>
            More campaign designs & materials
            coming soon.
          </p>

          <a
            href="https://wa.me/919820280493"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Campaign Details

            <ArrowUpRight
              size={16}
            />

          </a>

        </div>

      </div>
    </section>
  );
}