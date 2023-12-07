import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { About } from './components/About';
import { Projects } from "./components/Projects";
import {Footer} from "./components/Footer";
import Contact from "./components/Contact";
import {Reviews} from"./components/Reviews";
import { HireMe } from "./components/Hire";


function App() {
  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="hero" element={<HeroSection/>}/>
          <HeroSection/>
          <About/>
          <Projects/>
          <HireMe/>
          <Reviews/>
          <Contact/>
          <Footer/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;