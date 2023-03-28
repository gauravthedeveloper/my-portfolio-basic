import "./App.css";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import Experiences from "./Components/experiences/Experiences";
import About from "./Components/about/about";
import Portfolio from "./Components/portfolio/portfolio";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/contact";
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
