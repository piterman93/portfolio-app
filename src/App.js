import Header from "./components/Header";
import About from "./components/About/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

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
    </div>
  );
}

export default App;
