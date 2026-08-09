import LogoSection from "./sections/LogoSection"
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import IntroductionSection from "./sections/IntroductionSection"
import VelocityText from "./sections/VelocityText"
import SkillShowcase from "./sections/SkillShowcase"
import ResumeSection from "./sections/ResumeSection"
import Footer from "./sections/FooterSection"
import { ProjectsSection } from "./sections/ProjectsSection"

const App = () => {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-x-hidden selection:bg-blue-50 selection:text-black">
      <Navbar />
      <Hero />
      <div id="introduction" />
      <IntroductionSection />
      <LogoSection />
      <div id="projects" />
      <ProjectsSection />
      <VelocityText />
      <div id="skills" />
      <SkillShowcase />
      <div id="resume" />
      <ResumeSection />
      <Footer />
    </main>
  )
}

export default App