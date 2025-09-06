import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const DoubleArrow = () => {
  const arrowRef = useRef();

  useGSAP(() => {
    if (arrowRef.current) {
      gsap.fromTo(
        arrowRef.current,
        {
          y: 0,
        },
        {
          y: -10,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "circ.inOut",
        }
      );

      const paths=arrowRef.current.querySelectorAll("path")
      paths.forEach((path,i)=>{
        gsap.set(path,{opacity:0})

        gsap.to(path,{
            opacity:1,
            duration:1,
            repeat:-1,
            delay:i*1,
            yoyo:true,
            ease:"power1.inOut"
        })

      })
    }
  }, []);
  return (
    <svg
      ref={arrowRef}
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      className="cursor-pointer fade-out double-arrow"
    >
      <path
        d="M19 5L12.7071 11.2929C12.3166 11.6834 11.6834 11.6834 11.2929 11.2929L5 5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 13L12.7071 19.2929C12.3166 19.6834 11.6834 19.6834 11.2929 19.2929L5 13"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DoubleArrow;
