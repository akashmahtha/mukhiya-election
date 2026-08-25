import { useState } from "react";

import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import WhyChoose from "../components/WhyChoose";
import Services from "../components/Services";
import BoothPacket from "../components/BoothPacket";
import CampaignVehicles from "../components/CampaignVehicles";
import Gallery from "../components/Gallery";
import FinalCTA from "../components/FinalCTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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


export default function Home() {

  /* =====================================================
     STATES
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
     HOME
  ===================================================== */

  return (
    <div id="top">


      {/* =================================================
          HERO
      ================================================= */}

      <Hero />


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
              Our Products
            </div>

            <h2>
              Campaign Ko Banaye
              <span> Powerful</span>
            </h2>

            <p>
              चुनाव प्रचार के लिए आपकी जरूरत का हर material —
              quality products aur attractive customization
              ke saath.
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

        </div>

      </section>


      {/* =================================================
          ABOUT / WHY ELECTION KART
      ================================================= */}

      <section
        id="about"
        className="about-section"
      >

        <WhyChoose />

      </section>


      {/* =================================================
          SERVICES
      ================================================= */}

      <Services />


      {/* =================================================
          BOOTH PACKET
      ================================================= */}

      <BoothPacket />


      {/* =================================================
          CAMPAIGN VEHICLES
      ================================================= */}

      <CampaignVehicles />


      {/* =================================================
          GALLERY
      ================================================= */}

      <Gallery />


      {/* =================================================
          FINAL CTA
      ================================================= */}

      <FinalCTA />


      {/* =================================================
          CONTACT
      ================================================= */}

      <Contact />


      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer />


    </div>
  );
}