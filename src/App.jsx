import "./App.css";
import TimelineSection from "./header/header";
import SkillsSection from "./skills/skill";
import AboutMe from "./aboutme/about";
import Portfolio from "./portfolio/portfolio";
import Footer from "./footer/footer";

function App() {
  return (
    <>
      <TimelineSection />
      <SkillsSection />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
