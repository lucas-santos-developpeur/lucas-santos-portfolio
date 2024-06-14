import React from 'react'
import AboutSection from './_components/sections/About'
import Skills from './_components/sections/Skills'
import Hero from './_components/sections/Hero'
import PortfolioSection from './_components/sections/Portfolio'
import ContactSection from './_components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Skills />
      <PortfolioSection />
      <ContactSection />
    </>
  )
}
