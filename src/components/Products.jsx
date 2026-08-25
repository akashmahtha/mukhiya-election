import ProductCard from "./ProductCard";

import products from "../data/products";

import "../styles/products.css";

export default function Products() {
  return (
    <section
      id="products"
      className="products-section"
    >
      <div className="products-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="products-header">

          <div className="section-label">
            Campaign Products
          </div>

          <h2>
            चुनाव प्रचार के लिए
            <span>
              Complete Campaign Materials
            </span>
          </h2>

          <p>
            बिहार मुखिया चुनाव के लिए पोस्टर, पंपलेट,
            झंडे, गमछा, टोपी, टी-शर्ट, बैज, स्टिकर,
            पेन और अन्य promotional campaign materials
            उपलब्ध हैं।
          </p>

        </div>


        {/* =====================================================
            PRODUCT GRID
        ===================================================== */}

        <div className="products-grid">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div className="products-bottom">

          <div className="products-bottom-content">

            <span>
              COMPLETE CAMPAIGN KIT
            </span>

            <h3>
              Campaign की जरूरत के अनुसार
              <strong>
                अपना Kit तैयार करें।
              </strong>
            </h3>

            <p>
              Basic Campaign Kit, Team Campaign Kit और
              Booth / Area Kit आवश्यकता के अनुसार तैयार
              किया जा सकता है।
            </p>

          </div>

          <a
            href="#contact"
            className="products-bottom-btn"
          >
            Campaign Enquiry
          </a>

        </div>

      </div>
    </section>
  );
}