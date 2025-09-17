import gsap from "gsap";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import {ScrollTrigger} from "gsap/all"
import FirstVideo from "./sections/FirstVideo";
import { Ellie } from "./sections/Ellie";
import SecondVideo from "./sections/secondVideo";
import Abby from "./sections/Abby";
import { Final } from "./sections/Final";
import Outro from "./sections/Outro";

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main>
      <NavBar />
      <Hero/>
      <FirstVideo/>
      <Ellie />
      <SecondVideo/>
      <Abby />
      <Final/>
      <Outro/>
    </main>
  );
}

export default App;
