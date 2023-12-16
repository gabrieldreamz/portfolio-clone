import AboutMe from "@components/About-me/AboutMe";
import { IntroSection } from "@components/Intro-section/IntroSection";
import Project from "@components/Project-section/ProjectSection";
import Skills from "@components/Skills/Skills";
import Footer from "@components/Footer/footer";
import MobileIntro from "@components/Mobile-intro/MobileIntro";
import MainNavigation from "@components/Mobile-Nav-links/MainNavigation";
import MobileProject from "@components/Mobile-Project/MobileProject";
import MobileSkills from "@components/Mobile-Skills-section/MobileSkills";
import MobileFooter from "@components/Mobile-Footer/MobileFooter";
import Disclaimer from "@components/Mobile-Disclaimer";

export default function Home() {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden  lg:block overflow-hidden">
        <IntroSection />
        <Project />
        <Skills />
        <AboutMe />
        <Footer />
      </div>

      {/* Mobile View */}
      <div className="lg:hidden bg-gray-100/10">
        <MainNavigation />
        <MobileIntro />
        <MobileProject />
        <MobileSkills />
        <MobileFooter />
        <Disclaimer />
      </div>
    </>
  );
}
