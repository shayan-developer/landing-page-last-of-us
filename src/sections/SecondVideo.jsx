import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useRef } from "react";

const SecondVideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set(".abby", { marginTop: "-60vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".abby",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        onEnterBack: () => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
        },
        onEnter: () => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
        },
      },
    });

    tl.to(".abby", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="abby">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/last-vid-2.mp4"
          className="second-vd"
        />
      </div>
    </section>
  );
};

export default SecondVideo;
