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
    <>
        <Navbar />
        <Hero />
        <div className="h-5 w-full" id="introduction"></div>
        <IntroductionSection/>
        <LogoSection />
        <div className="h-10 w-full" id="projects">
        </div>
        
        <ProjectsSection />
        <div className="h-20 w-full"></div>
        <VelocityText/>
        <div className="h-20 w-full" id="skills"></div>
        <div className="w-full mt-20 ml-30">
            <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-white-50">#</span>Skills
            </h1>
        </div>
        <SkillShowcase/>
        <div className="h-220 w-full"></div>
        <div className="h-30 w-full" id="resume"></div>
        <ResumeSection/>
        <Footer/>
    </>
  )
}

export default App