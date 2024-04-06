import Navbar from "./components/Navbar/Navbar";
import ProgressBar from "./components/Navbar/ProgressBar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SkillsSection from "./components/About/SkillsSection";
import Divider from "./components/Divider/Divider";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProgressBar/>
      <Intro/>
      <Divider/>
      <SkillsSection/>
      <Divider/>
      {/* <Projects/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
