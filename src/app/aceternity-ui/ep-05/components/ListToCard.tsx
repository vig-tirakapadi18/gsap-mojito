"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { cards } from "../constants";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { Card } from "../types";

export const ListToCard = () => {
  const [currentCard, setCurrentCard] = useState<Card | null>();
  const ref = useOutsideClick(() => setCurrentCard(null));

  return (
    <div className="py-40 bg-gray-100 min-h-screen relative">
      {currentCard && (
        <div className="fixed bg-black/15 backdrop-blur-lg h-full w-full inset-0 z-10 " />
      )}
      {currentCard && (
        <motion.div
          layoutId={`card-${currentCard.id}`}
          ref={ref}
          className="h-[500px] fixed inset-0 z-20 m-auto bg-white w-80 rounded-2xl border border-stone-200 p-4 flex flex-col items-center gap-4 shadow-lg overflow-hidden"
        >
          <motion.img
            layoutId={`card-img-${currentCard.id}`}
            src={currentCard.src}
            alt={currentCard.title}
            className="h-60 aspect-square rounded-xl"
            height={240}
            width={240}
            loading="eager"
          />

          <div className="flex justify-between gap-4 items-start">
            <div className="flex flex-col items-start justify-center gap-2 w-full">
              <motion.h2
                layoutId={`card-heading-${currentCard.id}`}
                className="font-bold text-lg text-black"
              >
                {currentCard.title}
              </motion.h2>
              <motion.p
                layoutId={`card-desc-${currentCard.id}`}
                className="text-xs text-stone-500 text-start line-clamp-1"
              >
                {currentCard.description}
              </motion.p>
            </div>

            <Link
              href={currentCard.ctaLink}
              className="px-2 py-1 bg-rose-600 rounded-full text-white text-xs h-fit my-auto"
            >
              {currentCard.ctaText}
            </Link>
          </div>

          <motion.div
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-40 overflow-auto pb-20 [mask-image:linear-gradient(to_top,transparent_20%,black_80%)]"
          >
            {currentCard.content}
          </motion.div>
        </motion.div>
      )}
      <div className="max-w-lg mx-auto flex flex-col gap-4">
        {cards.map((card) => (
          <motion.button
            key={card.src}
            layoutId={`card-${card.id}`}
            onClick={() => setCurrentCard(card)}
            className="cursor-pointer p-4 rounded-lg flex justify-between border border-stone-200 shadow-xl"
          >
            <div className="flex gap-4 items-center">
              <motion.img
                layoutId={`card-img-${card.id}`}
                width={40}
                height={40}
                src={card.src}
                alt={card.title}
                className="h-10 aspect-square rounded-2xl"
                loading="eager"
              />

              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-heading-${card.id}`}
                  className="font-bold text-lg text-black"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-desc-${card.id}`}
                  className="text-xs text-stone-500 text-start line-clamp-1"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>

            <div className="px-2 py-1 bg-rose-600 rounded-full text-white text-xs h-fit">
              {card.ctaText}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
