import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const FirstVideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set(".first-vd-wrapper", { marginTop: "-150vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vd-wrapper",
        start: "top top",
        end: "+=180% top",
        scrub: true,
        pin: true,
        // markers: true,
        delay: 1,
        onEnterBack:()=>{
           videoRef.current.currentTime=0;
           videoRef.current.play()
        }
      },
    });

    tl.to(".hero-section", {
      opacity: 0,
      ease: "power1.inOut",
      onComplete: () => {
        videoRef?.current.play();
      },
    }).to(".first-vd-wrapper", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          className="first-vd"
          ref={videoRef}
          playsInline
          muted
          preload="auto"
          src="/videos/last-vid.mp4"
        />
      </div>
    </section>
  );
};

export default FirstVideo;
