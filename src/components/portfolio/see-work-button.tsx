"use client";

export function SeeWorkButton() {
  return (
    <button
      type="button"
      className="group relative mt-10 inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-full border border-white/30 bg-white/[0.13] px-7 py-3.5 text-[16px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_14px_40px_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-white/50 hover:bg-white/[0.2] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_18px_48px_rgba(255,255,255,0.14)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white"
      onClick={() => {
        document
          .getElementById("work")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      <span className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      <span className="pointer-events-none absolute -left-8 top-0 h-full w-10 rotate-12 bg-white/20 blur-md transition-transform duration-700 group-hover:translate-x-36" />
      <span className="relative">See my work</span>
      <span
        aria-hidden="true"
        className="relative transition-transform group-hover:translate-y-0.5"
      >
        ↓
      </span>
    </button>
  );
}
