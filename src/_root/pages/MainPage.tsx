import LazySection from "@/components/LazySection"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Services from "./Services"
import Skills from "./Skills"
import FAQ from "./FAQ"
import BlogSection from "./BlogSection"
import End from "./End"
import Timeline from "./Timeline"

const MainPage = () => {
  return (
    <div className="space-y-12">
      <LazySection>
        <Home />
      </LazySection>

      <LazySection>
        <About />
      </LazySection>

      <LazySection>
        <Timeline />
      </LazySection>

      <LazySection>
        <Projects />
      </LazySection>

      <LazySection>
        <Services />
      </LazySection>

      <LazySection>
        <Skills />
      </LazySection>

      <LazySection>
        <BlogSection />
      </LazySection>

      <LazySection>
        <FAQ />
      </LazySection>

      <LazySection>
        <End />
      </LazySection>
    </div>
  )
}

export default MainPage

