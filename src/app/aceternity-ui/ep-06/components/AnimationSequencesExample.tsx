"use client";

import { motion, useAnimate } from "motion/react";

export const AnimationSequencesExample = () => {
  const [scope, animate] = useAnimate();

  const startAnimating = async () => {
    animate(".text", { display: "none" }, { duration: 0.1 });
    animate(
      "button",
      { width: "5rem", height: "5rem", borderRadius: "1000px" },
      { duration: 0.3 }
    );
    await animate(
      "button",
      {
        display: "block",
        opacity: 1,
        scale: [1, 1.2, 0.8, 1],
        backgroundColor: "var(--color-green-500)",
      },
      { duration: 5 }
    );
    animate(".check-icon", { opacity: 1 }, { duration: 0.1 });
    animate(".check-icon path", { pathLength: 1 }, { duration: 0.3 });
    animate(".loader", { opacity: 1, width: "2rem" }, { duration: 0.1 });
    await animate(".loader", { rotate: 360 * 10 }, { duration: 4 });
  };

  return (
    <div
      ref={scope}
      className="relative w-60 h-20 flex items-center justify-center"
    >
      <motion.button
        style={{ width: "30rem" }}
        onClick={startAnimating}
        className="cursor-pointer text-white font-semibold px-4 py-2 rounded-lg bg-rose-500 flex justify-center items-center"
      >
        <motion.svg
          fill="hsl(228, 97%, 42%)"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="loader h-8 w-8"
          
        >
          <motion.path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="0.75s"
              values="0 12 12;360 12 12"
              repeatCount="indefinite"
            />
          </motion.path>
        </motion.svg>
        <span className="text">Purchase Now - Rs. 1499/-</span>
      </motion.button>
      {/* <motion.div
        style={{ display: "none" }}
        className="spinning-circle h-20 w-20 rounded-full bg-rose-500 absolute inset-0 m-auto"
      >
        <Check className="m-auto h-full text-white" size={36} />
      </motion.div> */}

      <motion.svg
        className="check-icon h-8 w-8 absolute inset-0 m-auto z-50 pointer-events-none"
        style={{ opacity: 0 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          transition={{
            duration: 0.3,
            type: "tween",
            ease: "easeOut",
          }}
          d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
        />
      </motion.svg>
    </div>
  );
};
