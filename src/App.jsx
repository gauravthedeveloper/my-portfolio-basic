import "./App.css";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import Experiences from "./Components/experiences/Experiences";
import About from "./Components/about/About";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
