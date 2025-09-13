import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Abby = () => {
  useGSAP(() => {
    gsap.set(".abby-life", { marginTop: "-80vh" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".abby-life",
          start: "top 80%",
          end: "10% center",
          scrub: 2,
        },
      })
      .to(".second-vd", { opacity: 0, duration: 1, ease: "power1.inOut" });

    gsap.to(
      ".abby-life .img-box",
      {
        scrollTrigger: {
          trigger: ".abby-life",
          start: "top center",
          end: "80% center",
          scrub: 2,
        },
        y: -200,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );
  }, []);
  return (
    <section className="abby-life">
      <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-10 mt-96">
        <div className="abby-1">
          <img src="/images/abby1.webp" />
        </div>
        <div className="abby-3">
          <img src="/images/abby3.jpg" />
        </div>
      </div>

      <div className="lg:w-1/2 abby-life-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1>Abby Anderson</h1>
          <h2>
            Trained as a soldier. Driven by vengeance. Hardened by survival.
          </h2>
          <p>
            Abby grew up in the Fireflies, shaped by her father’s ideals and the
            brutal reality of their world. After losing him, vengeance became
            her compass, pushing her to make choices that defined the rest of
            her life. Strong, disciplined, and unrelenting — Abby is both feared
            and respected.
          </p>
        </div>

        <div className="abby-2">
          <img src="/images/abby2.webp" />
        </div>

        <p className="max-w-xl lg:ps-32 ps-10">
          {" "}
          Beneath her tough exterior, Abby is haunted by the cycle of violence
          she’s been a part of.
        </p>
      </div>
    </section>
  );
};

export default Abby;
