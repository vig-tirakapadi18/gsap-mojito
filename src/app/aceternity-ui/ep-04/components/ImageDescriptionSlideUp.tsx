"use client";

import { features } from "../constants";
import ImageDescriptionCard from "./ImageDescriptionCard";

export const ImageDescriptionSlideUp = () => {
  return (
    <div
      className="min-h-screen bg-stone-900 flex items-center justify-center"
    >
      <div className="mx-auto max-w-4xl flex flex-col">
        {features.map((feature) => (
          <ImageDescriptionCard key={feature.title} feature={feature} />
        ))}
      </div>
    </div>
  );
};
