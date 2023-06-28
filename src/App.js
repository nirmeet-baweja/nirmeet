import "./App.css";
import ContactInfo from "./components/ContactInfo";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Timeline />
      {/* <Contact /> */}
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
