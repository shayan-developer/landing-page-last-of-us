import gsap from "gsap";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import {ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main>
      <NavBar />
      <Hero/>
    </main>
  );
}

export default App;
