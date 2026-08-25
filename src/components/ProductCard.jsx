import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import "../styles/products.css";

export default function ProductCard({ product }) {
  /* =====================================================
     SAFETY CHECK
  ===================================================== */

  if (!product) {
    return null;
  }


  /* =====================================================
     WHATSAPP ENQUIRY
  ===================================================== */

  const whatsappMessage = encodeURIComponent(
    `Hello Election Kart, mujhe "${product.englishName}" ke baare mein enquiry karni hai.`
  );

  const whatsappUrl =
    `https://wa.me/919820280493?text=${whatsappMessage}`;


  /* =====================================================
     IMAGE ERROR
  ===================================================== */

  const handleImageError = (event) => {
    event.currentTarget.style.display = "none";

    event.currentTarget.parentElement.classList.add(
      "product-image-error"
    );
  };


  return (
    <article className="product-card">

      {/* =================================================
          PRODUCT IMAGE
      ================================================= */}

      <div className="product-image-wrapper">

        <img
          src={product.image}
          alt={`${product.name} - ${product.englishName}`}
          className="product-image"
          loading="lazy"
          onError={handleImageError}
        />


        {/* =================================================
            CATEGORY
        ================================================= */}

        <span className="product-category">
          {product.category}
        </span>


        {/* =================================================
            QUICK ENQUIRY ARROW
        ================================================= */}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="product-arrow"
          aria-label={`Enquire about ${product.englishName}`}
        >
          <ArrowUpRight size={18} />
        </a>

      </div>


      {/* =================================================
          PRODUCT CONTENT
      ================================================= */}

      <div className="product-content">

        {/* Hindi Product Name */}

        <h3>
          {product.name}
        </h3>


        {/* English Product Name */}

        <p className="product-english">
          {product.englishName}
        </p>


        {/* Description */}

        <p className="product-description">
          {product.description}
        </p>


        {/* =================================================
            WHATSAPP ENQUIRY
        ================================================= */}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="product-enquiry"
          aria-label={`Enquire about ${product.englishName}`}
        >

          <MessageCircle size={15} />

          <span>
            Enquiry Karein
          </span>

          <ArrowUpRight size={16} />

        </a>

      </div>

    </article>
  );
}