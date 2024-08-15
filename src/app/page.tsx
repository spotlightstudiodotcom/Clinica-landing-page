import { About } from "./components/About";
import { ContactUs } from "./components/ContactUs";
import { FooterWithSocialLinks } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/Nav";
import { TestimonialCarousel } from "./components/Testimonials";
import { Treatments } from "./components/Treatments";

export default function Home() {
  return (
    <div className="relative">
      <NavBar /> 
      <Hero />
      <About />
      <Treatments />
      <TestimonialCarousel />
      <ContactUs />
      <FooterWithSocialLinks />
    </div>
  );
}
