import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Ellie = () => {
  useGSAP(() => {
    gsap.set(".ellie", { marginTop: "-80vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".ellie",
          start: "top 90%",
          end: "10% center",
          scrub: 2,
        },
      })
      .to(".first-vd", { opacity: 0, duration: 1, ease: "power1.inOut" });

    gsap.to(
      ".ellie .img-box",
      {
        scrollTrigger: {
          trigger: ".ellie",
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -300,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );
  }, []);

  return (
    <section className="ellie">
      <div className="max-w-lg ellie-content">
        <h1>Ellie</h1>
        <h2>A fierce survivor in a post-apocalyptic world.</h2>
        <p>
          Ellie grew up in a world devastated by the Cordyceps outbreak.
          Strong-willed and clever, she’s faced countless dangers from infected
          and humans alike. Despite her tough exterior, Ellie carries deep
          emotions and a longing for connection and hope.
        </p>

        <div className="ellie-2">
          <img src="/images/ellie2.jpg" />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="ellie-1">
          <img src="/images/ellie1.jpg" />
        </div>

        <div className="ellie-3">
          <img src="/images/ellie3.jpg" />
        </div>
      </div>
    </section>
  );
};
