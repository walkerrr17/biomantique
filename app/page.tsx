import Features from "../views/sections/Features";
import Hero from "../views/sections/Hero";
import Footer from "../views/sections/Footer";
import Stats from "../views/sections/Stats";
import CTA from "../views/sections/CTA";

export default function Home() {
  return (
  <div>
    <Hero />
    <Features />
    <Stats />
    <CTA />
    <Footer />
  </div>
  );
}
