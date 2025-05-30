import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import PortfolioGrid from "./PortfolioGrid";
import AboutSection from "./AboutSection";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioGrid />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
