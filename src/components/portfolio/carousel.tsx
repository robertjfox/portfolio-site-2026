"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";

export type CarouselState = {
  images: string[];
  index: number;
};

export function Carousel({
  state,
  onClose,
  onChange,
}: {
  state: CarouselState | null;
  onClose: () => void;
  onChange: (next: CarouselState) => void;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!state) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onChange({
          ...state,
          index: (state.index + 1) % state.images.length,
        });
      } else if (e.key === "ArrowLeft") {
        onChange({
          ...state,
          index:
            (state.index - 1 + state.images.length) % state.images.length,
        });
      }
    },
    [state, onClose, onChange],
  );

  useEffect(() => {
    if (!state) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state, handleKeyDown]);

  if (!state) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute left-6 cursor-pointer text-4xl text-white/50 transition-colors hover:text-white"
        onClick={(e) => {
          e.stopPropagation();
          onChange({
            ...state,
            index:
              (state.index - 1 + state.images.length) % state.images.length,
          });
        }}
      >
        ‹
      </button>
      <div
        className="relative h-[85vh] w-[85vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={state.images[state.index]}
          alt=""
          fill
          sizes="85vw"
          className="rounded-lg object-contain"
        />
      </div>
      <button
        type="button"
        className="absolute right-6 cursor-pointer text-4xl text-white/50 transition-colors hover:text-white"
        onClick={(e) => {
          e.stopPropagation();
          onChange({
            ...state,
            index: (state.index + 1) % state.images.length,
          });
        }}
      >
        ›
      </button>
      <div className="absolute bottom-6 text-[14px] text-white/40">
        {state.index + 1} / {state.images.length}
      </div>
    </div>
  );
}
