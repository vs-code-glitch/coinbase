import "./App.css";
import DailyPrices from "./components/DailyPrices";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import SignUp from "./components/SignUp";
import Roadmap from "./components/Roadmap";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <DailyPrices />
      <AboutUs />
      <Services />
      <SignUp />
      <Roadmap />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
