"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#amber-box",
      {
        x: 0,
        borderRadius: "0%",
        rotate: 0,
      },
      {
        x: 500, // in px
        repeat: -1, // will continue to repeat
        yoyo: true,
        rotate: 360, // rotates 360 degrees
        duration: 5, // duration 2 seconds
        ease: "bounce.out",
        borderRadius: "100%"
      }
    );
  }, []);

  return (
    <div className="flex flex-col p-20 gap-10">
      <h1 className="text-center font-bold text-3xl">gsap.fromTo()</h1>
      <div id="amber-box" className="w-20 h-20 bg-amber-600 rounded-lg" />
    </div>
  );
};

export default GsapFromTo;
