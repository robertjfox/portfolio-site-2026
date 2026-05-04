"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Carousel, type CarouselState } from "./carousel";
import { EcomAiSystemDiagram, FoxReportsDiagram } from "./diagrams";
import { renderAbout } from "./render-about";
import type { Company, SelectedWork } from "@/lib/works";
import {
  getCompanyWorks,
  projectDiagrams,
  projectScreenshots,
} from "@/lib/works";

function websiteLabel(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function mediaKey(kind: "screenshots" | "diagrams", fileNumber: number) {
  return `${kind}:${fileNumber}`;
}

export function ProjectDetail({
  company,
  work,
}: {
  company: Company;
  work: SelectedWork;
}) {
  const [carousel, setCarousel] = useState<CarouselState | null>(null);
  const screenshots = projectScreenshots(work);
  const diagrams = projectDiagrams(work);
  const inlineMediaKeys = new Set(
    work.sections?.flatMap((section) =>
      section.media ? [mediaKey(section.media.kind, section.media.fileNumber)] : [],
    ) ?? [],
  );
  const galleryScreenshots = screenshots.filter(
    (_, i) => !inlineMediaKeys.has(mediaKey("screenshots", i + 1)),
  );
  const galleryDiagrams = diagrams.filter(
    (_, i) => !inlineMediaKeys.has(mediaKey("diagrams", i + 1)),
  );
  const isSingleProjectCompany = getCompanyWorks(company.slug).length === 1;
  const backHref = isSingleProjectCompany ? "/#work" : `/work/${company.slug}`;
  const backLabel = isSingleProjectCompany ? "work" : company.name;
  const renderSectionMedia = (
    media: NonNullable<NonNullable<SelectedWork["sections"]>[number]["media"]>,
  ) => {
    const images = media.kind === "screenshots" ? screenshots : diagrams;
    const index = media.fileNumber - 1;
    const src = images[index];
    if (!src) return null;

    return (
      <button
        type="button"
        className="group/image mt-5 block w-full cursor-pointer overflow-hidden rounded-lg border border-[#2a2a2a] transition-all duration-300 hover:border-white/40 hover:brightness-110 hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
        onClick={() => setCarousel({ images, index })}
      >
        <Image
          src={src}
          alt={media.alt}
          width={1600}
          height={900}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="block h-auto w-full transition duration-300 group-hover/image:scale-[1.01]"
        />
      </button>
    );
  };

  return (
    <>
      <div className="h-screen overflow-y-auto">
        <div className="mx-auto w-full max-w-5xl px-6 py-10 md:px-10 lg:px-12">
          <Link
            href={backHref}
            className="inline-block w-fit text-text transition-colors hover:text-text-bold focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            ← Back to {backLabel}
          </Link>

          <div className="mt-8 animate-fade-in">
            <h1
              className="text-[22px] leading-tight sm:text-[26px]"
              style={{ color: work.color }}
            >
              {work.name}
            </h1>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border-2 px-3 py-1.5 text-[13px] leading-none"
                  style={{
                    borderColor: `${work.color}99`,
                    backgroundColor: `${work.color}26`,
                    color: work.color,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={company.website}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block w-fit font-bold underline decoration-current/40 underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
              style={{ color: work.color }}
            >
              Visit {websiteLabel(company.website)} ↗
            </a>

            <p className="mt-7 leading-relaxed text-[#f1f1f6]">
              {renderAbout(work.about, work.color)}
            </p>

            {work.sections?.map((section) => {
              const sectionMedia = section.media
                ? renderSectionMedia(section.media)
                : null;

              return (
                <section key={section.title} className="mt-8">
                  <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-text">
                    {section.title}
                  </h2>
                  {section.media?.placement === "before" && sectionMedia}
                  <p className="mt-4 whitespace-pre-line leading-relaxed text-[#f1f1f6]">
                    {renderAbout(section.body, work.color)}
                  </p>
                  {section.media?.placement !== "before" && sectionMedia}
                </section>
              );
            })}

            {work.slug === "analytics_dashboard" && <FoxReportsDiagram />}
            {work.slug === "ecom_ai_image_gen_platform" && (
              <EcomAiSystemDiagram />
            )}

            {galleryDiagrams.length > 0 && (
              <div className="mt-10">
                <div className="grid grid-cols-1 gap-4">
                  {galleryDiagrams.map((src, j) => (
                    <button
                      key={src}
                      type="button"
                      className="group/image block w-full cursor-pointer transition duration-300 hover:brightness-110 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                      onClick={() =>
                        setCarousel({ images: galleryDiagrams, index: j })
                      }
                    >
                      <Image
                        src={src}
                        alt={`${work.name} diagram ${j + 1}`}
                        width={1600}
                        height={900}
                        sizes="(min-width: 1024px) 1024px, 100vw"
                        className="block h-auto w-full"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {galleryScreenshots.length > 0 && (
              <div className="mt-10">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-prompt">
                  Screenshots
                </p>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {galleryScreenshots.slice(0, 3).map((src, j) => (
                    <button
                      key={src}
                      type="button"
                      className="group/image relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg border border-[#2a2a2a] transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                      onClick={() =>
                        setCarousel({ images: galleryScreenshots, index: j })
                      }
                    >
                      <Image
                        src={src}
                        alt={`${work.name} screenshot ${j + 1}`}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="rounded-lg object-cover transition duration-300 group-hover/image:scale-[1.03] group-hover/image:brightness-110"
                      />
                      <span className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover/image:bg-white/[0.04]" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Carousel
        state={carousel}
        onClose={() => setCarousel(null)}
        onChange={setCarousel}
      />
    </>
  );
}
