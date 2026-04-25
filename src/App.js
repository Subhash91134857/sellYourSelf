import PORTFOLIO_DATA from "./data/data";
import useActiveSection from "./hooks/useActiveSection";
import Cursor from "./components/common/Cursor";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/Navbar";
import CSS from "./data/css";
import HeroSection from "./components/Section/HeroSection";
import AboutSection from "./components/Section/AboutSection";
import SkillSection from "./components/Section/SkillSection";
import ProjectsSection from "./components/Section/ProjectSection";
import ContactSection from "./components/Section/ContactSection";
import ExperiencesSection from "./components/Section/ExperiencesSection";

function App() {
  const active = useActiveSection(PORTFOLIO_DATA.nav);
  return (
    <>
      <style>{CSS}</style>
      <Cursor />
      <NavBar active={active} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectsSection />
        <ExperiencesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
