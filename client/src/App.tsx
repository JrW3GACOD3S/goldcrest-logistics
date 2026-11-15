
import {
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Globe2,
  Truck,
  Headphones,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  CarFront,
  Sun,
  Moon,
  Search,
} from "lucide-react";

import { useEffect, useState } from "react";
import "./App.css";

const countries = [
  "Japan",
  "United Kingdom",
  "South Africa",
  "Dubai",
  "Other markets",
];

// Illustrative vehicle listings.
// Replace these with real inventory once the admin dashboard is operational.
const vehicles = [
  {
    id: 1,
    name: "Toyota Land Cruiser Prado",
    year: 2021,
    mileage: "42,000 km",
    transmission: "Automatic",
    fuel: "Petrol",
    country: "Japan",
    make: "Toyota",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    name: "Mercedes-Benz C-Class",
    year: 2022,
    mileage: "28,000 km",
    transmission: "Automatic",
    fuel: "Petrol",
    country: "United Kingdom",
    make: "Mercedes-Benz",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    name: "Honda Fit",
    year: 2020,
    mileage: "35,000 km",
    transmission: "Automatic",
    fuel: "Petrol",
    country: "Japan",
    make: "Honda",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=85",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("goldcrest-theme") === "dark";
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMake, setSelectedMake] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );

    localStorage.setItem(
      "goldcrest-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch = vehicle.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesMake =
      selectedMake === "All" || vehicle.make === selectedMake;

    const matchesCountry =
      selectedCountry === "All" || vehicle.country === selectedCountry;

    return matchesSearch && matchesMake && matchesCountry;
  });

  return (
    <>
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <CarFront size={27} />
          </span>

          <span>
            <strong>GOLDCREST</strong>
            <small>LOGISTICS</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#vehicles" onClick={closeMenu}>Available Cars</a>
          <a href="#process" onClick={closeMenu}>How It Works</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href="#contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Import a Car <ArrowRight size={16} />
          </a>
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode((previous) => !previous)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="eyebrow">
              <span></span>
              YOUR TRUSTED AUTOMOTIVE PARTNER
            </div>

            <h1>
              Your Dream Car.
              <br />
              <span>Our Responsibility.</span>
            </h1>

            <p>
              From international vehicle sourcing to delivery in Zambia,
              we make importing your next vehicle simple, transparent and reliable.
            </p>

            <div className="hero-actions">
              <a href="#vehicles" className="btn btn-yellow">
                Explore Vehicles <ArrowRight size={18} />
              </a>

              <a href="#process" className="btn btn-outline">
                How It Works
              </a>
            </div>

            <div className="hero-trust">
              <ShieldCheck size={19} />
              <span>
                Reliable sourcing. Transparent process. Trusted delivery.
              </span>
            </div>
          </div>

          <div className="hero-location">
            <MapPin size={16} />
            Serving customers across Zambia
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="trust-strip">
          <div><Globe2 /><span>International Sourcing</span></div>
          <div><ShieldCheck /><span>Trusted Service</span></div>
          <div><Truck /><span>Reliable Delivery</span></div>
          <div><Headphones /><span>Customer Support</span></div>
        </section>

        {/* VEHICLE MARKETPLACE */}
        <section className="section vehicles-section" id="vehicles">
          <div className="section-heading">
            <div>
              <span className="section-label">
                FIND YOUR NEXT VEHICLE
              </span>

              <h2>Explore Our Vehicles</h2>

              <p>
                Quality vehicles sourced from trusted international markets.
              </p>
            </div>

            <a href="#contact" className="text-link">
              Request a Vehicle <ArrowRight size={17} />
            </a>
          </div>

          <div className="vehicle-marketplace">
            {/* SEARCH AND FILTERS */}
            <div className="vehicle-filters">
              <div className="vehicle-search">
                <Search size={19} />

                <input
                  type="text"
                  placeholder="Search vehicles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <select
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                aria-label="Filter by vehicle make"
              >
                <option value="All">All Makes</option>
                <option value="Toyota">Toyota</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Honda">Honda</option>
              </select>

              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                aria-label="Filter by source country"
              >
                <option value="All">All Countries</option>
                <option value="Japan">Japan</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
            </div>

            {/* VEHICLE CARDS */}
            <div className="vehicles-grid">
              {filteredVehicles.length > 0 ? (
                filteredVehicles.map((vehicle) => (
                  <article className="vehicle-card" key={vehicle.id}>
                    <div className="vehicle-image">
                      <img
                        src={vehicle.image}
                        alt={`Illustrative photo for ${vehicle.name}`}
                        loading="lazy"
                      />

                      <span className="sample-badge">
                        Illustrative Listing
                      </span>
                    </div>

                    <div className="vehicle-card-content">
                      <div className="vehicle-country">
                        <MapPin size={14} />
                        {vehicle.country}
                      </div>

                      <h3>{vehicle.name}</h3>

                      <p className="vehicle-year">
                        {vehicle.year} Model
                      </p>

                      <div className="vehicle-details">
                        <span>{vehicle.mileage}</span>
                        <span>{vehicle.transmission}</span>
                        <span>{vehicle.fuel}</span>
                      </div>

                      <div className="vehicle-card-footer">
                        <span>Price on request</span>

                        <a
                          href="#contact"
                          className="vehicle-enquiry"
                        >
                          Request a Quote <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="no-vehicles">
                  <CarFront size={35} />
                  <h3>No matching vehicles found</h3>
                  <p>Try changing your search or filters.</p>
                </div>
              )}
            </div>

            <p className="marketplace-disclaimer">
              These are illustrative listings for demonstration purposes only.
              They do not represent actual available stock.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why-section" id="about">
          <div className="section">
            <div className="section-heading">
              <div>
                <span className="section-label">
                  WHY GOLDCREST LOGISTICS
                </span>

                <h2>More Than Just Vehicle Importing</h2>

                <p>
                  We focus on making your vehicle importing experience dependable.
                </p>
              </div>
            </div>

            <div className="features-grid">
              <article className="feature-card">
                <Globe2 />
                <h3>Global Vehicle Sourcing</h3>
                <p>
                  Access vehicles from multiple international markets through our sourcing network.
                </p>
              </article>

              <article className="feature-card">
                <ShieldCheck />
                <h3>Transparency</h3>
                <p>
                  Clear communication throughout the sourcing and importing process.
                </p>
              </article>

              <article className="feature-card">
                <Truck />
                <h3>Reliable Delivery</h3>
                <p>
                  We coordinate the journey of your vehicle towards its destination in Zambia.
                </p>
              </article>

              <article className="feature-card">
                <Headphones />
                <h3>Customer Support</h3>
                <p>
                  We're here to guide you and keep you informed along the way.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section process-section" id="process">
          <div className="section-heading centered">
            <span className="section-label">
              SIMPLE AND STRAIGHTFORWARD
            </span>

            <h2>How It Works</h2>

            <p>
              From finding your vehicle to getting it delivered.
            </p>
          </div>

          <div className="process-grid">
            {[
              ["01", "Choose Your Vehicle", "Tell us the vehicle you're interested in."],
              ["02", "Get a Quote", "We help you understand the costs involved."],
              ["03", "We Handle the Import", "We coordinate sourcing and transportation."],
              ["04", "Receive Your Vehicle", "Your vehicle makes its way to Zambia."],
            ].map(([number, title, description]) => (
              <article className="process-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SOURCING COUNTRIES */}
        <section className="countries-section">
          <div className="section">
            <span className="section-label">
              INTERNATIONAL REACH
            </span>

            <h2>Vehicles Without Borders.</h2>

            <p>
              We source from multiple international markets to give you more choice.
            </p>

            <div className="country-list">
              {countries.map((country) => (
                <span key={country}>
                  <MapPin size={16} />
                  {country}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div>
            <span className="section-label">
              LET'S GET YOU MOVING
            </span>

            <h2>Looking for Your Next Vehicle?</h2>

            <p>
              Tell us what you're looking for. We'll help you find it.
            </p>
          </div>

          <a
            href="mailto:info@goldcrestlogistics.com"
            className="btn btn-yellow"
          >
            Get in Touch <ArrowRight size={18} />
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <a href="#home" className="brand footer-brand">
            <span className="brand-icon">
              <CarFront size={27} />
            </span>

            <span>
              <strong>GOLDCREST</strong>
              <small>LOGISTICS</small>
            </span>
          </a>

          <p>
            Your trusted partner for international vehicle sourcing
            and delivery in Zambia.
          </p>

          <div className="footer-contact">
            <span>
              <Phone size={15} />
              Contact details coming soon
            </span>

            <span>
              <Mail size={15} />
              Business email coming soon
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Goldcrest Logistics. All rights reserved.
          </span>

          <a href="#home">
            Back to top <ChevronRight size={15} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
