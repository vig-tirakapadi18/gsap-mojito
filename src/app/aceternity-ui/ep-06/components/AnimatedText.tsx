"use client";

import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

const TEXT =
  "The Cinderella story is a classic folk tale about a kind, beautiful girl forced into servitude by her cruel stepmother and stepsisters, who is magically helped by a fairy godmother to attend a royal ball, falls for a prince, loses a glass slipper, and is ultimately found and married by the prince, symbolizing virtue rewarded with fortune.";

export const AnimatedText = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const startAnimating = () => {
      animate(
        "span",
        { opacity: 1, filter: "blur(0px)", y: 0 },
        { duration: 0.5, ease: "easeInOut", delay: stagger(0.05) }
      );
    };

    startAnimating();
  }, [animate]);

  return (
    <div
      ref={scope}
      className="text-white max-w-4xl mx-auto font-bold text-4xl font-poppins"
    >
      {/* <motion.span style={{ opacity: 0 }}>{TEXT}</motion.span> */}
      {TEXT.split(" ").map((word, index) => (
        <motion.span
          key={word + index}
          style={{ opacity: 0, filter: "blur(10px)" }}
        >
          {word} &nbsp;
        </motion.span>
      ))}
    </div>
  );
};
