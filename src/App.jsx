import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Reviews from "./components/reviewsData";

const pageSEO = {
  "/": {
    title:
      "QuickShield Services Wimbledon | Pest Control Services",
    description:
      "QuickShield Services Wimbledon provides pest control services for homes and businesses in Wimbledon and London. Contact us about your pest concerns.",
  },

  "/about-us": {
    title:
      "About Us | QuickShield Services Wimbledon",
    description:
      "Learn about QuickShield Services Wimbledon and our approach to pest inspections, treatment options and practical prevention guidance.",
  },

  "/services": {
    title:
      "Pest Control Services Wimbledon | QuickShield",
    description:
      "Explore pest control services in Wimbledon, including rats and mice, bed bugs, wasps, cockroaches and ants.",
  },

  "/contact-us": {
    title:
      "Contact Us | QuickShield Services Wimbledon",
    description:
      "Contact QuickShield Services Wimbledon for pest control enquiries. Call +44 7459 860336 or send an enquiry. Based at 3 Thornton Rd, London SW19 4NB.",
  },
};

function PageSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path =
      pathname.replace(/\/+$/, "") || "/";

    const seo = pageSEO[path] || {
      title:
        "QuickShield Services Wimbledon | Pest Control",
      description:
        "Pest control services in Wimbledon and London.",
    };

    // Update browser tab title
    document.title = seo.title;

    // Update meta description
    let meta = document.querySelector(
      'meta[name="description"]'
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      seo.description
    );
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <PageSEO />

      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about-us"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/contact-us"
          element={<Contact />}
        />
      </Routes>

      <Reviews />

      <Footer />
    </>
  );
}

export default App;