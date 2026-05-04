"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CompanyLogo } from "./company-logo";
import {
  markSessionAnimationRun,
  shouldRunSessionAnimation,
} from "@/lib/session-animation";
import { COMPANIES, getCompanyWorks } from "@/lib/works";

const WORK_LIST_LOGO_CLASSES: Record<string, string> = {
  foxs: "h-7 w-[165px] sm:h-8",
  curait: "h-9 w-[180px] sm:h-10",
  convene: "h-8 w-[190px] sm:h-9",
  reachrx: "h-8 w-[185px] sm:h-9",
  avantstay: "h-8 w-[195px] sm:h-9",
  rentroom: "h-8 w-[185px] sm:h-9",
};

const WORK_GROUPS = [
  {
    title: "Professional Work",
    companySlugs: ["foxs", "reachrx", "avantstay", "rentroom"],
  },
  {
    title: "Additional Projects",
    companySlugs: ["curait", "convene"],
  },
];

const TYPE_DELAY_MS = 14;
const LOGO_TO_TEXT_DELAY_MS = 180;
const ROW_STAGGER_MS = 420;
const WORK_ANIMATION_KEY = "portfolioWorkListAnimated";

function orderedCompanies() {
  return WORK_GROUPS.flatMap((group) =>
    group.companySlugs
      .map((slug) => COMPANIES.find((company) => company.slug === slug))
      .filter((company): company is (typeof COMPANIES)[number] =>
        Boolean(company),
      ),
  );
}

export function WorkList() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const timers = useRef<number[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [visibleLogos, setVisibleLogos] = useState<Record<string, boolean>>({});
  const [descriptions, setDescriptions] = useState<Record<string, string>>({});

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
      setDescriptions(
        Object.fromEntries(
          companies.map((company) => [company.slug, company.tagline]),
        ),
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
        setDescriptions(
          Object.fromEntries(
            companies.map((company) => [company.slug, company.tagline]),
          ),
        );
      }, 0);
      return () => window.clearTimeout(timer);
    }

    markSessionAnimationRun(WORK_ANIMATION_KEY);

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const timer = window.setTimeout(resolve, ms);
        timers.current.push(timer);
      });

    let cancelled = false;

    const typeDescription = async (slug: string, text: string) => {
      for (let i = 1; i <= text.length; i += 1) {
        if (cancelled) return;
        setDescriptions((current) => ({
          ...current,
          [slug]: text.slice(0, i),
        }));
        await wait(TYPE_DELAY_MS);
      }
    };

    const run = () => {
      companies.forEach((company, index) => {
        const startTimer = window.setTimeout(() => {
          if (cancelled) return;
          setVisibleLogos((current) => ({ ...current, [company.slug]: true }));

          const textTimer = window.setTimeout(() => {
            if (!cancelled) {
              void typeDescription(company.slug, company.tagline);
            }
          }, LOGO_TO_TEXT_DELAY_MS);
          timers.current.push(textTimer);
        }, index * ROW_STAGGER_MS);
        timers.current.push(startTimer);
      });
    };

    run();

    return () => {
      cancelled = true;
      timers.current.forEach((timer) => window.clearTimeout(timer));
      timers.current = [];
    };
  }, [hasStarted]);

  return (
    <div ref={rootRef} className="w-full max-w-4xl">
      <div
        className={`space-y-14 transition-opacity duration-500 ${
          hasStarted ? "opacity-100" : "opacity-0"
        }`}
      >
        {WORK_GROUPS.map((group) => (
          <section key={group.title}>
            <h2 className="mb-5 text-[16px] font-bold uppercase tracking-[0.2em] text-text sm:text-[20px]">
              {group.title}
            </h2>
            <ul className="space-y-2">
              {group.companySlugs.map((slug) => {
                const company = COMPANIES.find((item) => item.slug === slug);
                if (!company) return null;

                const works = getCompanyWorks(company.slug);
                const href =
                  works.length === 1
                    ? `/work/${company.slug}/${works[0].slug}`
                    : `/work/${company.slug}`;
                const visible = Boolean(visibleLogos[company.slug]);
                const typedDescription = descriptions[company.slug] ?? "";

                return (
                  <li key={company.slug}>
                    <Link
                      href={href}
                      className="group flex flex-col gap-1 rounded px-3 py-2.5 -mx-3 transition-all duration-200 hover:translate-x-1 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current sm:grid sm:grid-cols-[260px_1fr] sm:items-center sm:gap-10"
                    >
                      <span
                        className={`transition-all duration-500 ${
                          visible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        } group-hover:translate-x-1`}
                      >
                        <CompanyLogo
                          company={company}
                          className="text-[22px] leading-none transition-colors sm:text-[26px]"
                          imgClassName={
                            WORK_LIST_LOGO_CLASSES[company.slug] ??
                            "h-7 w-[150px] sm:h-8"
                          }
                        />
                      </span>
                      <span className="relative flex items-center gap-2 text-[16px] leading-snug text-prompt transition-colors group-hover:text-white sm:whitespace-nowrap sm:text-[19px]">
                        <span aria-hidden="true" className="invisible">
                          {company.tagline}
                        </span>
                        <span className="absolute left-0 top-0">
                          {typedDescription}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`inline-block transition-all duration-200 group-hover:translate-x-1 ${
                            typedDescription === company.tagline
                              ? "opacity-0 group-hover:opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          →
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
