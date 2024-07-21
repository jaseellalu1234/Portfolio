import "./App.css";
import Navbar from "./components/Navbar-section/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Works />
    </div>
  );
}

export default App;
