import About from "./components/About";
import Hero from "./components/Hero";
import Parallax from "./components/Parallax1";
import Tours from "./components/Tours";
import Community from "./components/Community";
import Testimonials from "./components/Testimonials";
import Parallax2 from "./components/Parallax2";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-[100%] overflow-x-hidden bg-[#131C21]">
      <Hero />
      <Parallax />
      <Tours />
      <About />
      <Community />
      <Testimonials />
      <Parallax2 />
      <Footer />
    </div>
  );
}

export default App;
