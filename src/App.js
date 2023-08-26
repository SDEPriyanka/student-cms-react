import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./common/Header";
import { Footer } from "./common/Footer";
import { Home } from "./components/Home";
import { Aboutus } from "./components/Aboutus";
import {Cources} from "./components/Cources";
import {Contact} from "./components/Contact";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus  />} />
          <Route path="/cources" element={<Cources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
