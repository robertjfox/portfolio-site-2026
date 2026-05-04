"use client";

import { useState } from "react";
import type { Company } from "@/lib/works";

export function CompanyLogo({
  company,
  className = "",
  imgClassName = "",
}: {
  company: Company;
  className?: string;
  imgClassName?: string;
}) {
  const candidates = [
    company.logo,
    company.logo.replace(/\.png$/i, ".svg"),
    company.logo.replace(/\.png$/i, ".webp"),
  ];
  const [candidateIndex, setCandidateIndex] = useState(0);
  const logo = candidates[candidateIndex];
  const showFallback = candidateIndex >= candidates.length;

  if (showFallback) {
    return (
      <span className={className} style={{ color: company.color }}>
        {company.name}
      </span>
    );
  }

  return (
    <span
      aria-label={company.name}
      role="img"
      className={`inline-block align-middle ${imgClassName}`}
      style={{
        backgroundColor: company.color,
        WebkitMask: `url(${logo}) left center / contain no-repeat`,
        mask: `url(${logo}) left center / contain no-repeat`,
      }}
    >
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="sr-only"
        onError={() => setCandidateIndex((index) => index + 1)}
      />
    </span>
  );
}
