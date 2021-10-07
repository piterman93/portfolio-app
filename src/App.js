import Header from "./components/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
