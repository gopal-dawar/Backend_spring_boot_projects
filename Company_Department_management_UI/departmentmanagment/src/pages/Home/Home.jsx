import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeaturesSection";
import AboutCompanySection from "./AboutCompanySection";
import ContactSection from "./ContactSection";
import ServiceSection from "./ServicesSection";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <HeroSection />
      <FeatureSection />
      <AboutCompanySection />
      <ServiceSection />
      <ContactSection />
    </div>
  );
};

export default Home;
