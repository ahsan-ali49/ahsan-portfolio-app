// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { About } from './components/About';
import { Projects } from "./components/Projects";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App container-fluid">
        <Header></Header>
        <HeroSection></HeroSection>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
    </div>
  );
}

export default App;