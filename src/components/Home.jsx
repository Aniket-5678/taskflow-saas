
import Navbar from "../components/Navbar";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";


function Home() {
  return (
    <>
      <Navbar />
     <Hero />
     <Features />
     <HowItWorks />
     <Pricing/>
     <Testimonials />
     <FAQ />
     <Contact/>
     <Footer/>
    </>
  );
}

export default Home;
