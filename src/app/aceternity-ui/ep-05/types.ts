import { ReactNode } from "react";

export type Card = {
  id: string;
  title: string;
  description: string;
  src: string;
  ctaText: "Click";
  ctaLink: string;
  content: ReactNode;
};

export type Cards = Card[];
