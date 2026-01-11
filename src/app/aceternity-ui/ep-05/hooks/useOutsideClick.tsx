"use client";

import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event?.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick as EventListener);

    return () => {
      document.removeEventListener("click", handleClick as EventListener);
    };
  }, [callback]);

  return ref;
};
