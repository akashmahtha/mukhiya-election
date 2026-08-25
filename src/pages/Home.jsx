import { useState } from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import ProductCard from "../components/ProductCard";

import Services from "../components/Services";
import PrintingServices from "../components/PrintingServices";
import GraphicDesign from "../components/GraphicDesign";
import DigitalCampaign from "../components/DigitalCampaign";

import BoothPacket from "../components/BoothPacket";
import GroundCampaign from "../components/GroundCampaign";
import CampaignVehicles from "../components/CampaignVehicles";
import EventManagement from "../components/EventManagement";
import Documentation from "../components/Documentation";

import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

import products from "../data/products";

import "../styles/products.css";


/* =====================================================
   PRODUCT CATEGORIES
===================================================== */

const categories = [
  "All Products",
  "Badges",
  "Caps & Topi",
  "Flags",
  "Patka & Gamcha",
  "Printing",
  "Clothing",
  "Stickers",
  "Election Materials",
  "Promotional",
  "Campaign",
  "LED Promotion",
];


/* =====================================================
   HOME
===================================================== */

export default function Home() {

  /* =====================================================
     PRODUCT STATES
  ===================================================== */

  const [activeCategory, setActiveCategory] =
    useState("All Products");

  const [showAll, setShowAll] =
    useState(false);


  /* =====================================================
     FILTER PRODUCTS
  ===================================================== */

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter(
          (product) =>
            product.category === activeCategory
        );


  /* =====================================================
     DISPLAY PRODUCTS
  ===================================================== */

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);


  /* =====================================================
     CATEGORY CHANGE
  ===================================================== */

  const handleCategoryChange = (category) => {

    setActiveCategory(category);

    setShowAll(false);

  };


  /* =====================================================
     RETURN
  ===================================================== */

  return (
    <div id="top">


      {/* =================================================
          HERO
      ================================================= */}

      <Hero />


      {/* =================================================
          ABOUT
      ================================================= */}

      <About />


      {/* =================================================
          PRODUCTS
      ================================================= */}

      <section
        id="products"
        className="products-section"
      >

        <div className="products-container">


          {/* =================================================
              PRODUCTS HEADER
          ================================================= */}

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


          {/* =================================================
              CATEGORY FILTERS
          ================================================= */}

          <div className="product-filters">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                className={`product-filter ${
                  activeCategory === category
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleCategoryChange(category)
                }
              >
                {category}
              </button>

            ))}

          </div>


          {/* =================================================
              PRODUCTS GRID
          ================================================= */}

          <div className="products-grid">

            {displayedProducts.length > 0 ? (

              displayedProducts.map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              ))

            ) : (

              <div className="no-products">

                <h3>
                  No Products Found
                </h3>

                <p>
                  Is category mein products
                  jaldi add kiye jayenge.
                </p>

              </div>

            )}

          </div>


          {/* =================================================
              VIEW ALL PRODUCTS
          ================================================= */}

          {filteredProducts.length > 8 && (

            <div className="products-view-all">

              <button
                type="button"
                className="view-all-btn"
                onClick={() =>
                  setShowAll(!showAll)
                }
              >

                {showAll
                  ? "Show Less"
                  : `View All ${filteredProducts.length} Products`
                }

              </button>

            </div>

          )}


          {/* =================================================
              PRODUCT CTA
          ================================================= */}

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
                Basic Campaign Kit, Team Campaign Kit
                और Booth / Area Kit आवश्यकता के अनुसार
                तैयार किया जा सकता है।
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


      {/* =================================================
          SERVICES
      ================================================= */}

      <Services />


      {/* =================================================
          PRINTING SERVICES
      ================================================= */}

      <PrintingServices />


      {/* =================================================
          GRAPHIC DESIGN
      ================================================= */}

      <GraphicDesign />


      {/* =================================================
          DIGITAL ELECTION CAMPAIGN
      ================================================= */}

      <DigitalCampaign />


      {/* =================================================
          BOOTH / AREA CAMPAIGN KIT
      ================================================= */}

      <BoothPacket />


      {/* =================================================
          GROUND CAMPAIGN
      ================================================= */}

      <GroundCampaign />


      {/* =================================================
          CAMPAIGN VEHICLES
      ================================================= */}

      <CampaignVehicles />


      {/* =================================================
          EVENT MANAGEMENT
      ================================================= */}

      <EventManagement />


      {/* =================================================
          DOCUMENTATION
      ================================================= */}

      <Documentation />


      {/* =================================================
          GALLERY
      ================================================= */}

      <Gallery />


      {/* =================================================
          CONTACT
      ================================================= */}

      <Contact />


    </div>
  );
}