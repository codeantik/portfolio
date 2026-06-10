import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Certifications from "./components/homepage/certifications";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import ProofOfWork from "./components/homepage/proof-of-work";
import Skills from "./components/homepage/skills";
import SoftSkills from "./components/homepage/soft-skills";

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <SoftSkills />
      <Experience />
      <ProofOfWork />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <ContactSection />
    </div>
  )
};