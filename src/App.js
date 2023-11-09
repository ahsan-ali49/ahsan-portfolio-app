// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { About } from './components/About';
import { Projects } from "./components/Projects";
// import { BuyerReview, SellerReview } from "./components/Reviews";
// import Contact from "./components/Contact";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App container-fluid">
        <Header></Header>
        <HeroSection></HeroSection>
        <About></About>
        <Projects></Projects>
    </div>
  );
}

export default App;