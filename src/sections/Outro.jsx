import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Outro = () => {
  useGSAP(() => {
    gsap.set(".final-message", { opacity: 0, marginTop: "-50vh" });

    const tl=gsap.timeline({
        scrollTrigger:{
            trigger:".final-message",
            start:"center center",
            end:"center center",
            scrub:true
        }
    })

    tl.to(".final-content",{opacity:0,duration:1,ease:"power1.inOut"})
    tl.to(".final-message",{opacity:1,duration:1,ease:"power1.inOut"})


  });
  return (
    <section className="final-message">
      <div className="h-full col-center gap-10 ">
        <div>
          <h3 className="gradient-title"> “Revenge won’t bring you peace.”</h3>
        </div>

        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" className="md:w-32 w-20" />
          <img src="/images/x-logo.svg" className="md:w-52 w-40" />
        </div>
      </div>
    </section>
  );
};

export default Outro;
