import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Route path="/" exact component={Hero} />
        <Route path="/about" component={Hero} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/cv" component={Timeline} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
