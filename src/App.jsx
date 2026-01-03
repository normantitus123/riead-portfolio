import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact/>
      <Footer />
    </>
  );
}

export default App;
