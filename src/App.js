import 'bootstrap/dist/css/bootstrap.min.css';
// import {Footer} from "./components/Footer";
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Projects } from "./components/Projects";
import { BuyerReview, SellerReview } from "./components/Reviews";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroSection></HeroSection>
      <Projects></Projects>
      <BuyerReview></BuyerReview>
      <SellerReview></SellerReview>
      <Contact></Contact>
    </div>
  );
}

export default App;