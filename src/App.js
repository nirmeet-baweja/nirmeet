import "./App.css";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div>
      <Navbar />
      <Layout>
        <Hero />
        <Projects />
        <Timeline />
        <ContactInfo />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
