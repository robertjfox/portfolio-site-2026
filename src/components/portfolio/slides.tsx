"use client";

import type { ReactNode } from "react";

export function SlidesContainer({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <div
      id={id}
      className="h-screen snap-y snap-mandatory overflow-y-scroll overscroll-contain"
    >
      {children}
    </div>
  );
}

export function Slide({
  children,
  className = "",
  innerClassName = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`flex h-screen snap-start snap-always flex-col overflow-y-auto ${className}`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 py-10 md:px-10 lg:px-12 ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
