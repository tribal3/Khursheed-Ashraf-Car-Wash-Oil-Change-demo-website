import { useCallback, useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoStrip from "./components/InfoStrip";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Packages from "./components/Packages";
import OilChange from "./components/OilChange";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  const [selectedService, setSelectedService] = useState("Signature Wash");

  const scrollToBooking = useCallback((service?: string) => {
    if (service) setSelectedService(service);
    const target = document.getElementById("book");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <AnnouncementBar />
      <Navbar onBook={() => scrollToBooking()} />
      <main id="main">
        <Hero onBook={() => scrollToBooking()} />
        <InfoStrip />
        <Marquee />
        <Services onBook={scrollToBooking} />
        <Packages onBook={scrollToBooking} />
        <OilChange onBook={scrollToBooking} />
        <WhyUs />
        <Process />
        <Gallery />
        <Testimonials />
        <Booking selectedService={selectedService} onServiceChange={setSelectedService} />
        <Contact />
        <FAQ />
        <FinalCTA onBook={() => scrollToBooking()} />
      </main>
      <Footer />
      <FloatingActions onBook={() => scrollToBooking()} />
    </>
  );
}
