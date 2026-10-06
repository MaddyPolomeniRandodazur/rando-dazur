import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import ClientsSection from "./components/ClientsSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExperienceSection />
      <ClientsSection />
      <Newsletter />
      <Footer />
    </>
  );
}