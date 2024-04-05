import Navbar from "./components/Navbar/Navbar";
import ProgressBar from "./components/Navbar/ProgressBar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProgressBar/>
      <Intro/>
      {/* <About/>
      <Projects/> */}
      {/* <Contact/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
