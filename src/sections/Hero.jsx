import { useGSAP } from "@gsap/react";
import { useMaskSettings } from "../utils";
import gsap from "gsap";
import DoubleArrow from "./DoubleArrow";
import Intro from "./Intro";

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } =
    useMaskSettings();

  useGSAP(() => {
    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set(".overlay-logo", { opacity: 0 });
    // gsap.set(".entrance-message", { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=400%",
        scrub: 2.5,
        pin: true,
        markers: true,
      },
    });

    tl.to(".fade-out",{opacity:0,ease:"power1.inOut"})
    .to(".scale-out",{scale:1,ease:"power1.inOut"},"<")
    .to(".mask-wrapper",{maskSize,ease:"power1.inOut"},"<")
    .to(".mask-wrapper",{maskPosition:maskPos,ease:"power1.inOut"},"<")
    .to(".mask-wrapper",{opacity:0,ease:"power1.inOut"},"-=0.2")

    .to(".overlay-logo",{
      opacity:1,
    },"-=0.2")

    .to(".entrance-message",{
      maskImage:"radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
      duration:0.1,
      ease:"power1.inOut"
    },"-=0.4")
  }, []);

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img src="/images/hero1.jpg" className="scale-out" />
        <DoubleArrow />
      </div>

      <div className="fake-logo-wrapper">
        <img src="/images/white-us-logo.svg" className="overlay-logo" />
      </div>

      <Intro/>
    </section>
  );
};

export default Hero;
