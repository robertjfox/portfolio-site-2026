"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CompanyLogo } from "./company-logo";
import { DiagramIcon } from "./icons";
import type { Company, SelectedWork } from "@/lib/works";

const PROJECT_STAGGER_MS = 140;

function websiteLabel(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function CompanyView({
  company,
  works,
}: {
  company: Company;
  works: SelectedWork[];
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setAnimate(true), 40);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen overflow-y-auto">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-10 md:px-10 lg:px-12">
        <Link
          href="/#work"
          className="inline-block w-fit text-text transition-colors hover:text-text-bold focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          ← Back to work
        </Link>

        <div className="mt-10 flex flex-1 flex-col">
          <div
            className={`transition-all duration-500 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <CompanyLogo
              company={company}
              className="text-[44px] leading-none tracking-tight sm:text-[60px] lg:text-[72px]"
              imgClassName="h-11 w-[240px] sm:h-14 sm:w-[300px] lg:h-16 lg:w-[340px]"
            />
            <a
              href={company.website}
              target="_blank"
              rel="noreferrer"
              className="mt-5 block w-fit font-bold underline decoration-current/40 underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
              style={{ color: company.color }}
            >
              Visit {websiteLabel(company.website)} ↗
            </a>
          </div>

          <div
            className={`mt-12 transition-all delay-200 duration-500 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-text">
              Featured projects
            </p>

            <ul className="mt-4 space-y-1">
              {works.map((work, index) => (
                <li
                  key={work.slug}
                  className={`transition-all duration-500 ${
                    animate
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: animate
                      ? `${350 + index * PROJECT_STAGGER_MS}ms`
                      : "0ms",
                  }}
                >
                  <Link
                    href={`/work/${company.slug}/${work.slug}`}
                    className="group grid grid-cols-[42px_1fr] gap-3 rounded px-2 py-3 -mx-2 transition-colors hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                  >
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center">
                      <DiagramIcon name={work.icon} color={company.color} />
                    </span>
                    <span>
                      <span
                        className="block text-[18px] font-bold leading-none transition-colors sm:text-[21px]"
                        style={{ color: company.color }}
                      >
                        {work.name}
                        <span
                          aria-hidden="true"
                          className="ml-2 inline-block opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                        >
                          →
                        </span>
                      </span>
                      <span className="mt-1 block text-[14px] leading-snug text-text transition-colors group-hover:text-text-bold sm:text-[15px]">
                        {work.summary}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
