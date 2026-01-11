"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React, { useRef, useState } from "react";
import { Feature } from "../constants";

interface ImageDescriptionCardProps {
  feature: Feature;
}

const backgroundColors = [
  "#39393A",
  "#6457A6",
  "#E76F51",
  "#0B3954",
  "#98473E",
  "#A37C40",
  "#69140E",
  "#3C5A14",
  "#373D20",
  "#45050C",
];

const ImageDescriptionCard: React.FC<ImageDescriptionCardProps> = ({
  feature,
}) => {
  const [background, setBackground] = useState("#39393A");

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const finalBackground = Math.floor(latest * backgroundColors.length);
    setBackground(backgroundColors[finalBackground]);
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 90, 180, 90, 0]
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 90, 180, 90, 0]
  );
  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 90, 180, 90, 0]
  );
  const y = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.25, 0.5, 0.75, 1],
      [0, 200, -200, 100, 0]
    ),
    { stiffness: 1000, damping: 100, mass: 2 }
  );
  const blur = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [36, 10, 0, 10, 36]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.5, 0.75, 1, 0.75, 0.5]
  );

  return (
    <motion.div
      ref={containerRef}
      key={feature.title}
      className="grid grid-cols-2 items-center gap-20 py-20 px-6 h-screen"
      animate={{ background }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="flex flex-col gap-5">
        {feature.icon}
        <h2 className="text-4xl font-bold text-stone-100">{feature.title}</h2>
        <p className="text-lg text-stone-400">{feature.description}</p>
      </div>

      <motion.div
        style={{
          rotateX,
          rotateY,
          rotateZ,
          opacity,
          y,
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
      >
        {feature.content}
      </motion.div>
    </motion.div>
  );
};

export default ImageDescriptionCard;
