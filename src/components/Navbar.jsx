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


/* =====================================================
   PHONE NUMBERS
===================================================== */

const phoneNumbers = [
  {
    number: "7352555555",
    href: "tel:+9173525555",
  },
  {
    number: "9820280493",
    href: "tel:+919820280493",
  },
];


/* =====================================================
   SERVICES DROPDOWN
===================================================== */

const serviceLinks = [
  {
    label: "Campaign Planning",
    target: "services",
  },
  {
    label: "Digital Campaign",
    target: "digital-campaign",
  },
  {
    label: "Graphic Design",
    target: "graphic-design",
  },
  {
    label: "Printing Services",
    target: "printing-services",
  },
  {
    label: "Ground Campaign",
    target: "ground-campaign",
  },
  {
    label: "Event Management",
    target: "event-management",
  },
  {
    label: "Photography & Videography",
    target: "documentation",
  },
  {
    label: "Campaign Documentation",
    target: "documentation",
  },
];


/* =====================================================
   CAMPAIGN MATERIALS DROPDOWN
===================================================== */

const campaignMaterialLinks = [
  {
    label: "All Campaign Products",
    target: "products",
  },
  {
    label: "Posters & Banners",
    target: "products",
  },
  {
    label: "Flags & Branding",
    target: "products",
  },
  {
    label: "Cap & Patka",
    target: "products",
  },
  {
    label: "Gamcha & T-Shirt",
    target: "products",
  },
  {
    label: "Badges & ID Cards",
    target: "products",
  },
  {
    label: "Campaign Kits",
    target: "booth-packet",
  },
  {
    label: "Promotional Merchandise",
    target: "products",
  },
];


/* =====================================================
   CAMPAIGN SUPPORT DROPDOWN
===================================================== */

const campaignSupportLinks = [
  {
    label: "Booth / Area Support",
    target: "booth-packet",
  },
  {
    label: "प्रचार वाहन",
    target: "campaign-vehicles",
  },
  {
    label: "LED Van",
    target: "campaign-vehicles",
  },
  {
    label: "WhatsApp & SMS Campaign",
    target: "digital-campaign",
  },
  {
    label: "Public Meeting",
    target: "event-management",
  },
  {
    label: "Roadshow",
    target: "ground-campaign",
  },
  {
    label: "Nukkad Sabha",
    target: "ground-campaign",
  },
  {
    label: "Election Day Support",
    target: "ground-campaign",
  },
];


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [openDropdown, setOpenDropdown] =
    useState(null);


  /* =====================================================
     CLOSE MENU
  ===================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };


  /* =====================================================
     TOGGLE DROPDOWN
  ===================================================== */

  const toggleDropdown = (name) => {
    setOpenDropdown(
      openDropdown === name
        ? null
        : name
    );
  };


  /* =====================================================
     SCROLL TO SECTION
  ===================================================== */

  const scrollToSection = (id) => {

    closeMenu();

    const element =
      document.getElementById(id);

    if (!element) {

      console.warn(
        `Section with id="${id}" was not found.`
      );

      return;
    }

    setTimeout(() => {

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }, 50);
  };


  /* =====================================================
     RENDER DROPDOWN
  ===================================================== */

  const renderDropdown = (
    items,
    dropdownName
  ) => {

    return (
      <div
        className={`nav-dropdown-menu ${
          openDropdown === dropdownName
            ? "dropdown-visible"
            : ""
        }`}
      >

        {items.map((item) => (

          <button
            key={item.label}
            type="button"
            onClick={() =>
              scrollToSection(item.target)
            }
          >
            {item.label}
          </button>

        ))}

      </div>
    );
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
          onClick={() =>
            scrollToSection("top")
          }
          aria-label="Mukhiya Election Home"
        >

          <div className="logo-mark">
            ME
          </div>

          <div className="logo-text">

            <strong>
              MUKHIYA
            </strong>

            <span>
              ELECTION
            </span>

          </div>

        </button>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="desktop-nav">


          {/* HOME */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("top")
            }
          >
            Home
          </button>


          {/* ABOUT */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("about")
            }
          >
            About
          </button>


          {/* =================================================
              SERVICES
          ================================================= */}

          <div
            className="nav-dropdown"
            onMouseEnter={() =>
              setOpenDropdown("services")
            }
            onMouseLeave={() =>
              setOpenDropdown(null)
            }
          >

            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() =>
                toggleDropdown("services")
              }
            >

              Services

              <ChevronDown
                size={14}
                className={
                  openDropdown === "services"
                    ? "rotate-arrow"
                    : ""
                }
              />

            </button>

            {renderDropdown(
              serviceLinks,
              "services"
            )}

          </div>


          {/* =================================================
              CAMPAIGN MATERIALS
          ================================================= */}

          <div
            className="nav-dropdown"
            onMouseEnter={() =>
              setOpenDropdown(
                "campaign-materials"
              )
            }
            onMouseLeave={() =>
              setOpenDropdown(null)
            }
          >

            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() =>
                toggleDropdown(
                  "campaign-materials"
                )
              }
            >

              Campaign Materials

              <ChevronDown
                size={14}
                className={
                  openDropdown ===
                  "campaign-materials"
                    ? "rotate-arrow"
                    : ""
                }
              />

            </button>

            {renderDropdown(
              campaignMaterialLinks,
              "campaign-materials"
            )}

          </div>


          {/* =================================================
              CAMPAIGN SUPPORT
          ================================================= */}

          <div
            className="nav-dropdown"
            onMouseEnter={() =>
              setOpenDropdown(
                "campaign-support"
              )
            }
            onMouseLeave={() =>
              setOpenDropdown(null)
            }
          >

            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() =>
                toggleDropdown(
                  "campaign-support"
                )
              }
            >

              Campaign Support

              <ChevronDown
                size={14}
                className={
                  openDropdown ===
                  "campaign-support"
                    ? "rotate-arrow"
                    : ""
                }
              />

            </button>

            {renderDropdown(
              campaignSupportLinks,
              "campaign-support"
            )}

          </div>


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

        </nav>


        {/* =================================================
            DESKTOP PHONE + WHATSAPP
        ================================================= */}

        <div className="navbar-actions">

          {phoneNumbers.map((phone) => (

            <a
              key={phone.number}
              href={phone.href}
              className="navbar-phone-number"
              aria-label={`Call ${phone.number}`}
            >

              <Phone size={14} />

              <span>
                {phone.number}
              </span>

            </a>

          ))}


          <a
            href="https://wa.me/919820280493"
            target="_blank"
            rel="noopener noreferrer"
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
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
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
            onClick={() =>
              scrollToSection("top")
            }
          >
            Home
          </button>


          {/* ABOUT */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("about")
            }
          >
            About
          </button>


          {/* =================================================
              MOBILE SERVICES
          ================================================= */}

          <div className="mobile-product-wrapper">

            <button
              type="button"
              className="mobile-product-trigger"
              onClick={() =>
                toggleDropdown("services")
              }
            >

              <span>
                Services
              </span>

              <ChevronDown
                size={17}
                className={
                  openDropdown === "services"
                    ? "rotate-arrow"
                    : ""
                }
              />

            </button>


            <div
              className={`mobile-product-menu ${
                openDropdown === "services"
                  ? "mobile-product-menu-open"
                  : ""
              }`}
            >

              {serviceLinks.map((item) => (

                <button
                  key={item.label}
                  type="button"
                  onClick={() =>
                    scrollToSection(
                      item.target
                    )
                  }
                >
                  {item.label}
                </button>

              ))}

            </div>

          </div>


          {/* =================================================
              MOBILE CAMPAIGN MATERIALS
          ================================================= */}

          <div className="mobile-product-wrapper">

            <button
              type="button"
              className="mobile-product-trigger"
              onClick={() =>
                toggleDropdown(
                  "campaign-materials"
                )
              }
            >

              <span>
                Campaign Materials
              </span>

              <ChevronDown
                size={17}
                className={
                  openDropdown ===
                  "campaign-materials"
                    ? "rotate-arrow"
                    : ""
                }
              />

            </button>


            <div
              className={`mobile-product-menu ${
                openDropdown ===
                "campaign-materials"
                  ? "mobile-product-menu-open"
                  : ""
              }`}
            >

              {campaignMaterialLinks.map(
                (item) => (

                  <button
                    key={item.label}
                    type="button"
                    onClick={() =>
                      scrollToSection(
                        item.target
                      )
                    }
                  >
                    {item.label}
                  </button>

                )
              )}

            </div>

          </div>


          {/* =================================================
              MOBILE CAMPAIGN SUPPORT
          ================================================= */}

          <div className="mobile-product-wrapper">

            <button
              type="button"
              className="mobile-product-trigger"
              onClick={() =>
                toggleDropdown(
                  "campaign-support"
                )
              }
            >

              <span>
                Campaign Support
              </span>

              <ChevronDown
                size={17}
                className={
                  openDropdown ===
                  "campaign-support"
                    ? "rotate-arrow"
                    : ""
                }
              />

            </button>


            <div
              className={`mobile-product-menu ${
                openDropdown ===
                "campaign-support"
                  ? "mobile-product-menu-open"
                  : ""
              }`}
            >

              {campaignSupportLinks.map(
                (item) => (

                  <button
                    key={item.label}
                    type="button"
                    onClick={() =>
                      scrollToSection(
                        item.target
                      )
                    }
                  >
                    {item.label}
                  </button>

                )
              )}

            </div>

          </div>


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
              MOBILE PHONE + WHATSAPP
          ================================================= */}

          <div className="mobile-nav-actions">

            {phoneNumbers.map((phone) => (

              <a
                key={phone.number}
                href={phone.href}
                className="mobile-call"
              >

                <Phone size={16} />

                {phone.number}

              </a>

            ))}


            <a
              href="https://wa.me/919820280493"
              target="_blank"
              rel="noopener noreferrer"
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