import "./App.css";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import { useLocalStorage } from "./utilities/useLocalStorage";

function App() {
  const [activeSection, setActiveSection] = useLocalStorage(
    "activeSection",
    "About"
  );

  return (
    <div>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Layout>
        <Hero setActiveSection={setActiveSection} />
        <Projects />
        <Timeline />
        <ContactInfo />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
