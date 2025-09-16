import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import EducationSection from "./components/EducationSection";
import DataCenterSection from "./components/DataCenterSection";
import BGPPeeringSection from "./components/BGPPeeringSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SupportSection from "./components/SupportSection";
import ContactSection from "./components/ContactSection";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0b0f] text-white">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <EducationSection />
      <WhyChooseUsSection />
      <DataCenterSection />
      <BGPPeeringSection />
      <TestimonialsSection />
      <SupportSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
