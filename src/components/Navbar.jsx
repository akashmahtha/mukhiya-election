import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import "../styles/navbar.css";

const productLinks = [
  {
    label: "All Products",
    target: "products",
  },
  {
    label: "Badges",
    target: "products",
  },
  {
    label: "Caps & Topi",
    target: "products",
  },
  {
    label: "Flags",
    target: "products",
  },
  {
    label: "Printing",
    target: "products",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  /* =====================================================
     SCROLL TO SECTION
  ===================================================== */

  const scrollToSection = (id) => {
    closeMenu();

    const element = document.getElementById(id);

    if (!element) {
      console.warn(`Section with id="${id}" was not found.`);
      return;
    }

    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <header className="navbar">

      {/* =================================================
          NAVBAR CONTAINER
      ================================================= */}

      <div className="navbar-container">

        {/* =================================================
            LOGO
        ================================================= */}

        <button
          type="button"
          className="navbar-logo"
          onClick={() => scrollToSection("top")}
          aria-label="Mukhiya Election Home"
        >
          <div className="logo-mark">
            ME
          </div>

          <div className="logo-text">
            <strong>MUKHIYA</strong>
            <span>ELECTION</span>
          </div>
        </button>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="desktop-nav">

          {/* HOME */}

          <button
            type="button"
            onClick={() => scrollToSection("top")}
          >
            Home
          </button>

          {/* ABOUT */}

          <button
            type="button"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          {/* =================================================
              PRODUCTS DROPDOWN
          ================================================= */}

          <div
            className="nav-dropdown"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >

            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products

              <ChevronDown
                size={14}
                className={
                  productsOpen
                    ? "rotate-arrow"
                    : ""
                }
              />
            </button>

            <div
              className={`nav-dropdown-menu ${
                productsOpen
                  ? "dropdown-visible"
                  : ""
              }`}
            >
              {productLinks.map((item) => (
                <button
                  type="button"
                  key={item.label}
                  onClick={() =>
                    scrollToSection(item.target)
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>

          </div>

          {/* SERVICES */}

          <button
            type="button"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>

          {/* BOOTH PACKET */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("booth-packet")
            }
          >
            Booth Packet
          </button>

          {/* CAMPAIGN VEHICLES */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("campaign-vehicles")
            }
          >
            Campaign Vehicles
          </button>

          {/* GALLERY */}

          <button
            type="button"
            onClick={() => scrollToSection("gallery")}
          >
            Gallery
          </button>

          {/* CONTACT */}

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>

        </nav>

        {/* =================================================
            DESKTOP ACTIONS
        ================================================= */}

        <div className="navbar-actions">

          {/* CALL */}

          <a
            href="tel:+919820280493"
            className="navbar-call"
            aria-label="Call Mukhiya Election"
          >
            <Phone size={16} />

            <span>
              Call Now
            </span>
          </a>

          {/* WHATSAPP */}

          <a
            href="https://wa.me/919820280493"
            target="_blank"
            rel="noreferrer"
            className="navbar-whatsapp"
            aria-label="WhatsApp Mukhiya Election"
          >
            <MessageCircle size={16} />
          </a>

        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>

      </div>

      {/* =================================================
          MOBILE NAVIGATION
      ================================================= */}

      <div
        className={`mobile-nav ${
          menuOpen
            ? "mobile-nav-open"
            : ""
        }`}
      >

        <div className="mobile-nav-inner">

          {/* HOME */}

          <button
            type="button"
            onClick={() => scrollToSection("top")}
          >
            Home
          </button>

          {/* ABOUT */}

          <button
            type="button"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          {/* =================================================
              MOBILE PRODUCTS
          ================================================= */}

          <div className="mobile-product-wrapper">

            <button
              type="button"
              className="mobile-product-trigger"
              onClick={() =>
                setProductsOpen(!productsOpen)
              }
            >
              <span>
                Products
              </span>

              <ChevronDown
                size={17}
                className={
                  productsOpen
                    ? "rotate-arrow"
                    : ""
                }
              />
            </button>

            <div
              className={`mobile-product-menu ${
                productsOpen
                  ? "mobile-product-menu-open"
                  : ""
              }`}
            >
              {productLinks.map((item) => (
                <button
                  type="button"
                  key={item.label}
                  onClick={() =>
                    scrollToSection(item.target)
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>

          </div>

          {/* SERVICES */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("services")
            }
          >
            Services
          </button>

          {/* BOOTH PACKET */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("booth-packet")
            }
          >
            Booth Packet
          </button>

          {/* CAMPAIGN VEHICLES */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("campaign-vehicles")
            }
          >
            Campaign Vehicles
          </button>

          {/* GALLERY */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("gallery")
            }
          >
            Gallery
          </button>

          {/* CONTACT */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("contact")
            }
          >
            Contact
          </button>

          {/* =================================================
              MOBILE ACTIONS
          ================================================= */}

          <div className="mobile-nav-actions">

            {/* CALL */}

            <a
              href="tel:+919820280493"
              className="mobile-call"
            >
              <Phone size={17} />
              Call Now
            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/919820280493"
              target="_blank"
              rel="noreferrer"
              className="mobile-whatsapp"
            >
              <MessageCircle size={17} />

              WhatsApp

              <ArrowUpRight size={15} />
            </a>

          </div>

        </div>

      </div>

    </header>
  );
}