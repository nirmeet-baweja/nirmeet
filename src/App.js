import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <header>
      <Navbar />
      <Hero />
      <h1>Nirmeet's portfolio</h1>
      <img src="/logo192.png" alt="" />
    </header>
  );
}

export default App;
