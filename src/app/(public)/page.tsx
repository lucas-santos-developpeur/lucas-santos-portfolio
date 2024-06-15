import React from "react";
import AboutSection from "./_components/sections/About";
import Skills from "./_components/sections/Skills";
import Hero from "./_components/sections/Hero";
import PortfolioSection from "./_components/sections/Portfolio";
import ContactSection from "./_components/sections/Contact";
import CoursesAndCertifications from "./_components/sections/CoursesAndCertifications";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Skills />
      <CoursesAndCertifications />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
