"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
    useGSAP(() => {
        gsap.to(".amber-boxes", {
            y: 500,
            repeat: -1,
            yoyo: true,
            borderRadius: "100%",
            rotation: 360,
            // stagger: 0.5
            stagger: {
                amount: 1.5,
                grid: [1, 2]
            }
        })
    }, [])
        
  return (
    <div className="flex flex-col p-20 gap-10">
      <h1 className="text-center font-bold text-3xl">GSAP Stagger</h1>

      <div className="flex gap-5 mx-auto">
        <div className="w-20 h-20 bg-amber-50 rounded-lg amber-boxes" />
        <div className="w-20 h-20 bg-amber-100 rounded-lg amber-boxes" />
        <div className="w-20 h-20 bg-amber-200 rounded-lg amber-boxes" />
        <div className="w-20 h-20 bg-amber-300 rounded-lg amber-boxes" />
        <div className="w-20 h-20 bg-amber-400 rounded-lg amber-boxes" />
        <div className="w-20 h-20 bg-amber-500 rounded-lg amber-boxes" />
        <div className="w-20 h-20 bg-amber-600 rounded-lg amber-boxes" />
        <div className="w-20 h-20 bg-amber-700 rounded-lg amber-boxes" />
        <div className="w-20 h-20 bg-amber-800 rounded-lg amber-boxes" />
        <div className="w-20 h-20 bg-amber-900 rounded-lg amber-boxes" />
      </div>
    </div>
  );
}

export default GsapStagger
