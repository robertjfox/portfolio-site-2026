"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CompanyLogo } from "./company-logo";
import { DiagramIcon } from "./icons";
import {
  markSessionAnimationRun,
  shouldRunSessionAnimation,
} from "@/lib/session-animation";
import {
  COMPANIES,
  getCompanyWorks,
  PORTFOLIO_COMPANY_ORDER,
} from "@/lib/works";

const WORK_LIST_LOGO_CLASSES: Record<string, string> = {
  foxs: "h-5 w-[110px] sm:h-6",
  curait: "h-7 w-[135px] sm:h-8",
  convene: "h-6 w-[140px] sm:h-7",
  reachrx: "h-6 w-[135px] sm:h-7",
  avantstay: "h-6 w-[145px] sm:h-7",
  rentroom: "h-6 w-[135px] sm:h-7",
};

const ROW_STAGGER_MS = 280;
const CHIP_STAGGER_MS = 80;
const LOGO_TO_CHIP_DELAY_MS = 160;
const WORK_ANIMATION_KEY = "portfolioWorkListAnimated";

function orderedCompanies() {
  return PORTFOLIO_COMPANY_ORDER.map((slug) =>
    COMPANIES.find((company) => company.slug === slug),
  ).filter((company): company is (typeof COMPANIES)[number] => Boolean(company));
}

function allChipKeys() {
  return orderedCompanies().flatMap((company) =>
    getCompanyWorks(company.slug).map(
      (work) => `${company.slug}:${work.slug}`,
    ),
  );
}

export function WorkList() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const timers = useRef<number[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [visibleLogos, setVisibleLogos] = useState<Record<string, boolean>>({});
  const [visibleChips, setVisibleChips] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (shouldRunSessionAnimation(WORK_ANIMATION_KEY)) {
      return;
    }

    const companies = orderedCompanies();
    const timer = window.setTimeout(() => {
      setHasStarted(true);
      setVisibleLogos(
        Object.fromEntries(companies.map((company) => [company.slug, true])),
      );
      setVisibleChips(
        Object.fromEntries(allChipKeys().map((key) => [key, true])),
      );
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const companies = orderedCompanies();
    const shouldAnimate = shouldRunSessionAnimation(WORK_ANIMATION_KEY);

    if (prefersReducedMotion || !shouldAnimate) {
      const timer = window.setTimeout(() => {
        setVisibleLogos(
          Object.fromEntries(companies.map((company) => [company.slug, true])),
        );
        setVisibleChips(
          Object.fromEntries(allChipKeys().map((key) => [key, true])),
        );
      }, 0);
      return () => window.clearTimeout(timer);
    }

    markSessionAnimationRun(WORK_ANIMATION_KEY);

    let cancelled = false;

    companies.forEach((company, rowIndex) => {
      const logoTimer = window.setTimeout(() => {
        if (cancelled) return;
        setVisibleLogos((current) => ({ ...current, [company.slug]: true }));

        const works = getCompanyWorks(company.slug);
        works.forEach((work, chipIndex) => {
          const chipTimer = window.setTimeout(() => {
            if (cancelled) return;
            setVisibleChips((current) => ({
              ...current,
              [`${company.slug}:${work.slug}`]: true,
            }));
          }, LOGO_TO_CHIP_DELAY_MS + chipIndex * CHIP_STAGGER_MS);
          timers.current.push(chipTimer);
        });
      }, rowIndex * ROW_STAGGER_MS);
      timers.current.push(logoTimer);
    });

    return () => {
      cancelled = true;
      timers.current.forEach((timer) => window.clearTimeout(timer));
      timers.current = [];
    };
  }, [hasStarted]);

  return (
    <div ref={rootRef} className="mx-auto w-[850px]">
      <ul
        className={`space-y-9 transition-opacity duration-500 ${
          hasStarted ? "opacity-100" : "opacity-0"
        }`}
      >
        {orderedCompanies().map((company) => {
          const works = getCompanyWorks(company.slug);
          const logoVisible = Boolean(visibleLogos[company.slug]);

          return (
            <li key={company.slug}>
              <span
                className={`block transition-all duration-500 ${
                  logoVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <CompanyLogo
                  company={company}
                  className="text-[18px] leading-none sm:text-[20px]"
                  imgClassName={
                    WORK_LIST_LOGO_CLASSES[company.slug] ??
                    "h-6 w-[140px] sm:h-7"
                  }
                />
              </span>
              <ul className="mt-3 flex flex-col gap-2">
                {works.map((work) => {
                  const chipKey = `${company.slug}:${work.slug}`;
                  const chipVisible = Boolean(visibleChips[chipKey]);
                  return (
                    <li key={work.slug}>
                      <Link
                        href={`/work/${company.slug}/${work.slug}`}
                        className={`group flex items-start gap-2.5 rounded transition-all duration-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current ${
                          chipVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0"
                        }`}
                      >
                        <DiagramIcon
                          name={work.icon}
                          color={work.color}
                          className="mt-[3px] h-[18px] w-[18px] shrink-0"
                          strokeWidth={2.4}
                        />
                        <span
                          className="text-[15px] leading-snug underline-offset-4 group-hover:underline sm:text-[16px]"
                          style={{ color: work.color }}
                        >
                          <span>{work.name}</span>
                          <span className="text-text transition-colors duration-150 group-hover:text-current">
                            {" "}
                            — {work.summary}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
