"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Home from "./Home"
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"
import Services from "./Services"
import Skills from "./Skills"
import FAQ from "./FAQ"
import BlogSection from "./BlogSection"
import End from "./End"
import LazySection from "@/components/LazySection"

// Import responsive components
import ResponsiveAbout from "@/Responsive/ResponsiveAbout"
import ResponsiveExperience from "@/Responsive/ResponsiveExperience"
import ResponsiveProjects from "@/Responsive/ResponsiveProjects"
import ResponsiveServices from "@/Responsive/ResponsiveServices"
import ResponsiveSkillsSection from "@/Responsive/ResponsiveSkillsSection"
import ResponsiveBlogSection from "@/Responsive/ResponsiveBlogSection"
import ResponsiveFAQ from "@/Responsive/ResponsiveFAQ"
import ResponsiveEnd from "@/Responsive/ResponsiveEnd"

const MainPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 720)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <LazySection>
          <Home />
        </LazySection>
        <LazySection>{isSmallScreen ? <ResponsiveAbout /> : <About />}</LazySection>
        <LazySection>{isSmallScreen ? <ResponsiveExperience /> : <Experience />}</LazySection>
        <LazySection>{isSmallScreen ? <ResponsiveProjects /> : <Projects />}</LazySection>
        <LazySection>{isSmallScreen ? <ResponsiveServices /> : <Services />}</LazySection>
        <LazySection>{isSmallScreen ? <ResponsiveSkillsSection /> : <Skills />}</LazySection>
        <LazySection>{isSmallScreen ? <ResponsiveBlogSection /> : <BlogSection />}</LazySection>
        <LazySection>{isSmallScreen ? <ResponsiveFAQ /> : <FAQ />}</LazySection>
        <LazySection>{isSmallScreen ? <ResponsiveEnd /> : <End />}</LazySection>
      </main>
      <Footer />
    </div>
  )
}

export default MainPage

