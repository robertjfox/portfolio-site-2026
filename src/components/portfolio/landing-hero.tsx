"use client";

import { useEffect, useRef, useState } from "react";
import { SeeWorkButton } from "./see-work-button";
import {
  markSessionAnimationRun,
  shouldRunSessionAnimation,
} from "@/lib/session-animation";

const NAME = "Robert Fox";
const ROLE = "Software Engineer";
const FULL_TITLE = `${NAME}, ${ROLE}`;
const DESCRIPTION_SENTENCES = [
  "Product-minded software engineer with 6+ years building production systems across healthcare, hospitality, property management, and retail.",
  "Strongest at translating ambiguous business workflows into shipped software, AI tools, integrations, and internal platforms.",
];

const TYPE_DELAY_MS = 28;
const DESCRIPTION_TYPE_DELAY_MS = 12;
const SECTION_PAUSE_MS = 320;
const SENTENCE_PAUSE_MS = 520;
const LANDING_ANIMATION_KEY = "portfolioLandingHeroAnimated";

export function LandingHero() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [showButton, setShowButton] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const shouldAnimate = shouldRunSessionAnimation(LANDING_ANIMATION_KEY);

    if (prefersReducedMotion || !shouldAnimate) {
      const timer = window.setTimeout(() => {
        setName(NAME);
        setRole(ROLE);
        setDescription(DESCRIPTION_SENTENCES.join(" "));
        setShowButton(true);
      }, 0);
      return () => window.clearTimeout(timer);
    }

    markSessionAnimationRun(LANDING_ANIMATION_KEY);

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const timer = window.setTimeout(resolve, ms);
        timers.current.push(timer);
      });

    const typeText = async (
      text: string,
      setValue: (value: string) => void,
      prefix = "",
      delay = TYPE_DELAY_MS,
    ) => {
      for (let i = 1; i <= text.length; i += 1) {
        setValue(`${prefix}${text.slice(0, i)}`);
        await wait(delay);
      }
    };

    let cancelled = false;

    const run = async () => {
      await typeText(NAME, setName);
      await wait(SECTION_PAUSE_MS);
      if (cancelled) return;

      await typeText(ROLE, setRole);
      await wait(SECTION_PAUSE_MS);
      if (cancelled) return;

      await typeText(
        DESCRIPTION_SENTENCES[0],
        setDescription,
        "",
        DESCRIPTION_TYPE_DELAY_MS,
      );
      await wait(SENTENCE_PAUSE_MS);
      if (cancelled) return;

      await typeText(
        DESCRIPTION_SENTENCES[1],
        setDescription,
        `${DESCRIPTION_SENTENCES[0]} `,
        DESCRIPTION_TYPE_DELAY_MS,
      );
      await wait(SECTION_PAUSE_MS);
      if (!cancelled) setShowButton(true);
    };

    void run();

    return () => {
      cancelled = true;
      timers.current.forEach((timer) => window.clearTimeout(timer));
      timers.current = [];
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="relative min-h-[32px] text-prompt text-[26px] leading-[1.1] tracking-tight sm:min-h-[39px] sm:text-[32px] lg:min-h-[46px] lg:text-[38px]">
        <span aria-hidden="true" className="invisible">
          {FULL_TITLE}
        </span>
        <span className="absolute left-0 top-0 whitespace-nowrap text-left">
          {name}
          {role && (
            <>
              <span>, </span>
              <span>{role}</span>
            </>
          )}
          {!showButton && <span className="animate-pulse">_</span>}
        </span>
      </h1>

      <p className="relative mt-6 min-h-[132px] max-w-3xl text-text leading-relaxed sm:min-h-[90px] sm:text-[19px]">
        <span aria-hidden="true" className="invisible">
          {DESCRIPTION_SENTENCES.join(" ")}
        </span>
        <span className="absolute left-0 top-0 w-full text-left">
          {description}
        </span>
      </p>

      <div
        className={`transition-all duration-500 ${
          showButton
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <SeeWorkButton />
      </div>
    </div>
  );
}
