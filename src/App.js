// import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Header/>
        <HeroSection/>
        <About/>
        <Projects/>
        <HireMe/>
        <Reviews/>
        <Contact/>
        <Footer/>
        
    </div>
  );
}

export default App;