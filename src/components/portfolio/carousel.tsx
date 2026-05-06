"use client";

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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={state.images[state.index]}
        alt=""
        className="block max-h-[94vh] max-w-[calc(100vw-7rem)] rounded-lg sm:max-w-[calc(100vw-8rem)]"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        type="button"
        aria-label="Previous image"
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-3xl leading-none text-white/70 transition-colors hover:bg-white/20 hover:text-white sm:left-4 sm:h-12 sm:w-12"
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
      <button
        type="button"
        aria-label="Next image"
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-3xl leading-none text-white/70 transition-colors hover:bg-white/20 hover:text-white sm:right-4 sm:h-12 sm:w-12"
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
      <div className="pointer-events-none absolute bottom-6 text-[14px] text-white/40">
        {state.index + 1} / {state.images.length}
      </div>
    </div>
  );
}
