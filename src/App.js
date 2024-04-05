import Navbar from "./components/Navbar/Navbar";
import ProgressBar from "./components/Navbar/ProgressBar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SkillsSection from "./components/About/SkillsSection";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProgressBar/>
      <Intro/>
      <SkillsSection/>
      {/*<Projects/> */}
      {/* <Contact/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
