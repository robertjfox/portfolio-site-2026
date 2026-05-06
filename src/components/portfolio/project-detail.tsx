"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Carousel, type CarouselState } from "./carousel";
import {
  AvantStayBookingFeaturesDiagram,
  AvantStayBookingNumbersDiagram,
  AvantStayNumbersDiagram,
  AvantStayTapeChartOutcomes,
  CuraitArchitectureDiagram,
  EcomAiOutcomes,
  EcomAiSystemDiagram,
  FoxsInternalFeaturesDiagram,
  FoxsInternalNumbersDiagram,
  OutfitAgentOutcomes,
  OutfitAgentSystemDiagram,
  ReachRxNumbersDiagram,
  RentroomMaintenanceDiagram,
  RentroomNumbersDiagram,
} from "./diagrams";
import { renderAbout, renderLeadLabel } from "./render-about";
import type { Company, SelectedWork } from "@/lib/works";
import {
  getNextWork,
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
  if (work.slug === "outfit_generation_agent") {
    inlineMediaKeys.add(mediaKey("screenshots", 1));
    inlineMediaKeys.add(mediaKey("screenshots", 2));
    inlineMediaKeys.add(mediaKey("screenshots", 3));
  }
  if (work.slug === "generative_ai_styling_app") {
    for (let i = 1; i <= 7; i += 1) {
      inlineMediaKeys.add(mediaKey("screenshots", i));
    }
  }
  if (work.slug === "clinical_data_backed_llm_chat") {
    for (let i = 1; i <= 6; i += 1) {
      inlineMediaKeys.add(mediaKey("screenshots", i));
    }
  }
  if (work.slug === "internal_dashboard") {
    for (let i = 1; i <= 4; i += 1) {
      inlineMediaKeys.add(mediaKey("screenshots", i));
    }
  }
  if (work.slug === "consumer_booking_site") {
    for (let i = 1; i <= 3; i += 1) {
      inlineMediaKeys.add(mediaKey("screenshots", i));
    }
  }
  if (work.slug === "rental_management_web_app") {
    for (let i = 1; i <= 6; i += 1) {
      inlineMediaKeys.add(mediaKey("screenshots", i));
    }
  }
  if (work.slug === "ecom_ai_image_gen_platform") {
    for (let i = 1; i <= 3; i += 1) {
      inlineMediaKeys.add(mediaKey("screenshots", i));
    }
  }
  if (work.slug === "analytics_dashboard") {
    for (let i = 1; i <= 8; i += 1) {
      inlineMediaKeys.add(mediaKey("screenshots", i));
    }
  }
  const galleryScreenshots = screenshots.filter(
    (_, i) => !inlineMediaKeys.has(mediaKey("screenshots", i + 1)),
  );
  const galleryDiagrams = diagrams.filter(
    (_, i) => !inlineMediaKeys.has(mediaKey("diagrams", i + 1)),
  );
  const backHref = "/#work";
  const backLabel = "work";
  const nextWork = getNextWork(company.slug, work.slug);
  const curaitSections =
    work.slug === "generative_ai_styling_app" ? work.sections ?? [] : [];
  const curaitProblemSections = curaitSections.filter(
    (section) => section.title !== "Tradeoffs",
  );
  const curaitTradeoffSections = curaitSections.filter(
    (section) => section.title === "Tradeoffs",
  );
  const outfitSections =
    work.slug === "outfit_generation_agent" ? work.sections ?? [] : [];
  const outfitProblemSection = outfitSections.find(
    (section) => section.title === "Problem",
  );
  const outfitNonProblemSections = outfitSections.filter(
    (section) => section.title !== "Problem",
  );
  const standardSections =
    work.slug === "generative_ai_styling_app" ||
    work.slug === "outfit_generation_agent"
      ? []
      : work.sections ?? [];
  const ecomChallengesIndex =
    work.slug === "ecom_ai_image_gen_platform"
      ? standardSections.findIndex((section) => section.title === "Challenges")
      : -1;
  const ecomPreChallengeSections =
    ecomChallengesIndex >= 0
      ? standardSections.slice(0, ecomChallengesIndex)
      : standardSections;
  const ecomFromChallengeSections =
    ecomChallengesIndex >= 0 ? standardSections.slice(ecomChallengesIndex) : [];
  const analyticsChallengesIndex =
    work.slug === "analytics_dashboard"
      ? standardSections.findIndex(
          (section) => section.title === "Challenges",
        )
      : -1;
  const analyticsPreChallengeSections =
    analyticsChallengesIndex >= 0
      ? standardSections.slice(0, analyticsChallengesIndex)
      : standardSections;
  const analyticsFromChallengeSections =
    analyticsChallengesIndex >= 0
      ? standardSections.slice(analyticsChallengesIndex)
      : [];
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
        className="mt-5 block w-full cursor-pointer overflow-hidden rounded-lg border border-[#2a2a2a] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
        onClick={() => setCarousel({ images, index })}
      >
        <Image
          src={src}
          alt={media.alt}
          width={1600}
          height={900}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="block h-auto w-full"
        />
      </button>
    );
  };
  const renderSection = (
    section: NonNullable<SelectedWork["sections"]>[number],
  ) => {
    const sectionMedia = section.media ? renderSectionMedia(section.media) : null;
    const listItems = section.body.split("\n\n").filter(Boolean);
    const bodyContent =
      listItems.length > 1 ? (
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-[#f1f1f6]">
          {listItems.map((item) => (
            <li key={item}>
              {["Tradeoffs", "Challenges"].includes(section.title)
                ? renderLeadLabel(item, work.color)
                : renderAbout(item, work.color)}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 whitespace-pre-line leading-relaxed text-[#f1f1f6]">
          {renderAbout(section.body, work.color)}
        </p>
      );

    if (section.media?.layout === "row") {
      return (
        <section key={section.title} className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-start [&>button]:!mt-0">
            <div>
              <h2 className="section-heading">{section.title}</h2>
              {bodyContent}
            </div>
            {sectionMedia}
          </div>
        </section>
      );
    }

    return (
      <section key={section.title} className="mt-8">
        <h2 className="section-heading">{section.title}</h2>
        {section.media?.placement === "before" && sectionMedia}
        {bodyContent}
        {section.media?.placement !== "before" && sectionMedia}
      </section>
    );
  };

  return (
    <>
      <div
        className="h-screen overflow-y-auto"
        style={{ ["--section-heading-color" as string]: work.color }}
      >
        <div className="mx-auto w-full max-w-5xl px-6 py-10 md:px-10 lg:px-12">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={backHref}
              className="inline-block w-fit text-text transition-colors hover:text-text-bold focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              ← Back to {backLabel}
            </Link>
            {nextWork && (
              <Link
                href={`/work/${nextWork.company.slug}/${nextWork.work.slug}`}
                className="group inline-flex items-center gap-1.5 text-right transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
              >
                <span className="text-text">Next Up:</span>
                <span style={{ color: nextWork.work.color }}>
                  {nextWork.work.name}
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: nextWork.work.color }}
                >
                  →
                </span>
              </Link>
            )}
          </div>

          <div className="mt-8 animate-fade-in">
            <div className="flex items-baseline justify-between gap-4">
              <h1
                className="text-[22px] leading-tight sm:text-[26px]"
                style={{ color: work.color }}
              >
                {work.name}
              </h1>
              <a
                href={company.website}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 font-bold underline decoration-current/40 underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                style={{ color: work.color }}
              >
                Visit {websiteLabel(company.website)} ↗
              </a>
            </div>

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

            {work.slug === "analytics_dashboard" && (
              <FoxsInternalNumbersDiagram />
            )}
            {work.slug === "clinical_data_backed_llm_chat" && (
              <ReachRxNumbersDiagram />
            )}
            {work.slug === "internal_dashboard" && <AvantStayNumbersDiagram />}
            {work.slug === "consumer_booking_site" && (
              <AvantStayBookingNumbersDiagram />
            )}
            {work.slug === "outfit_generation_agent" && <OutfitAgentOutcomes />}
            {work.slug === "rental_management_web_app" && (
              <RentroomNumbersDiagram />
            )}
            {work.slug === "ecom_ai_image_gen_platform" && <EcomAiOutcomes />}

            <p className="mt-7 whitespace-pre-line leading-relaxed text-[#f1f1f6]">
              {renderAbout(work.about, work.color)}
            </p>

            {work.slug === "consumer_booking_site" && screenshots.length > 0 && (
              <div className="mt-8 flex items-start gap-2 sm:gap-3">
                {screenshots.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    className="block flex-1 cursor-pointer overflow-hidden rounded-lg border border-[#2a2a2a] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                    onClick={() => setCarousel({ images: screenshots, index })}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`AvantStay booking site screenshot ${index + 1}`}
                      className="block h-auto w-full"
                    />
                  </button>
                ))}
              </div>
            )}

            {work.slug === "consumer_booking_site" && (
              <AvantStayBookingFeaturesDiagram />
            )}

            {work.slug === "generative_ai_styling_app" &&
              screenshots.length > 0 && (
                <div className="mt-8 flex gap-2 sm:gap-3">
                  {screenshots.map((src, index) => (
                    <button
                      key={src}
                      type="button"
                      className="block flex-1 cursor-pointer overflow-hidden rounded-lg border border-[#2a2a2a] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                      onClick={() => setCarousel({ images: screenshots, index })}
                    >
                      <Image
                        src={src}
                        alt={`Curait screenshot ${index + 1}`}
                        width={342}
                        height={740}
                        sizes="(min-width: 768px) 14vw, 28vw"
                        className="block h-auto w-full"
                      />
                    </button>
                  ))}
                </div>
              )}
            {curaitProblemSections.map(renderSection)}
            {work.slug === "outfit_generation_agent" && outfitProblemSection && (
              <section className="mt-8">
                <div className="grid gap-6 md:grid-cols-2 md:items-start">
                  <div>
                    <h2 className="section-heading">Problem</h2>
                    <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-[#f1f1f6]">
                      {outfitProblemSection.body
                        .split("\n\n")
                        .filter(Boolean)
                        .map((item) => (
                          <li key={item}>{renderAbout(item, work.color)}</li>
                        ))}
                    </ul>
                  </div>
                  {screenshots[0] && (
                    <button
                      type="button"
                      className="block w-full cursor-pointer overflow-hidden rounded-lg border border-[#2a2a2a] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                      onClick={() =>
                        setCarousel({ images: screenshots, index: 0 })
                      }
                    >
                      <Image
                        src={screenshots[0]}
                        alt="Shop The Look carousel on foxs.com"
                        width={1600}
                        height={900}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="block h-auto w-full"
                      />
                    </button>
                  )}
                </div>
              </section>
            )}
            {outfitNonProblemSections.map(renderSection)}
            {work.slug === "outfit_generation_agent" && (
              <>
                <OutfitAgentSystemDiagram />
                <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-start">
                  <div className="space-y-8">
                    <section>
                      <h2 className="section-heading">
                        The agent in flight
                      </h2>
                      <p className="mt-3 leading-relaxed text-[#f1f1f6]">
                        Per-category progress streams in live: text shortlist,
                        vision grid analysis, selected product. Once every
                        category is filled, gpt-image-2 renders the flatlay and
                        on-model shot.
                      </p>
                    </section>
                    <section>
                      <h2 className="section-heading">
                        Generated looks ready for Meta Ads
                      </h2>
                      <p className="mt-3 leading-relaxed text-[#f1f1f6]">
                        Each completed outfit lands in Saved Ads with its
                        product strip, flatlay, and on-figure shot. The team
                        reviews, edits, and pushes to Microsoft Teams or Meta
                        Ads from here.
                      </p>
                    </section>
                  </div>
                  <div className="space-y-6">
                    {screenshots[1] && (
                      <button
                        type="button"
                        className="block w-full cursor-pointer overflow-hidden rounded-lg border border-[#2a2a2a] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                        onClick={() =>
                          setCarousel({ images: screenshots, index: 1 })
                        }
                      >
                        <Image
                          src={screenshots[1]}
                          alt="Flatlay Agent dashboard running through outfit categories"
                          width={1600}
                          height={900}
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="block h-auto w-full"
                        />
                      </button>
                    )}
                  </div>
                </div>
                {screenshots[2] && (
                  <button
                    type="button"
                    className="mt-6 block w-full cursor-pointer overflow-hidden rounded-lg border border-[#2a2a2a] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                    onClick={() =>
                      setCarousel({ images: screenshots, index: 2 })
                    }
                  >
                    <Image
                      src={screenshots[2]}
                      alt="Completed shop-the-look outfits ready for review"
                      width={1600}
                      height={900}
                      sizes="(min-width: 1024px) 1024px, 100vw"
                      className="block h-auto w-full"
                    />
                  </button>
                )}
              </>
            )}
            {work.slug === "internal_dashboard" && screenshots.length > 0 && (
              <div className="mt-8 flex items-start gap-2 sm:gap-3">
                {screenshots.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    className="block flex-1 cursor-pointer overflow-hidden rounded-lg border border-[#2a2a2a] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                    onClick={() => setCarousel({ images: screenshots, index })}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Bookings Tape Chart screenshot ${index + 1}`}
                      className="block h-auto w-full"
                    />
                  </button>
                ))}
              </div>
            )}
            {work.slug === "ecom_ai_image_gen_platform" &&
              screenshots.length > 0 && (
                <div className="mt-8 flex items-stretch gap-2 sm:gap-3">
                  {screenshots.map((src, index) => (
                    <button
                      key={src}
                      type="button"
                      className="relative flex-1 aspect-video cursor-pointer overflow-hidden rounded-lg border border-[#2a2a2a] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                      onClick={() => setCarousel({ images: screenshots, index })}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`${work.name} screenshot ${index + 1}`}
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              )}
            {work.slug === "analytics_dashboard" && screenshots.length > 0 && (
              <div className="mt-8 space-y-2 sm:space-y-3">
                {[
                  screenshots.slice(0, 4),
                  screenshots.slice(4, 8),
                ].map((row, rowIndex) =>
                  row.length > 0 ? (
                    <div
                      key={rowIndex}
                      className="flex items-stretch gap-2 sm:gap-3"
                    >
                      {row.map((src, i) => {
                        const index = rowIndex * 4 + i;
                        return (
                          <button
                            key={src}
                            type="button"
                            className="relative flex-1 aspect-video cursor-pointer overflow-hidden rounded-lg border border-[#2a2a2a] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                            onClick={() =>
                              setCarousel({ images: screenshots, index })
                            }
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={src}
                              alt={`${work.name} screenshot ${index + 1}`}
                              className="absolute inset-0 h-full w-full object-cover object-top"
                            />
                          </button>
                        );
                      })}
                    </div>
                  ) : null,
                )}
              </div>
            )}
            {work.slug === "rental_management_web_app" &&
              screenshots.length > 0 && (
                <div className="mt-8 flex items-stretch gap-2 sm:gap-3">
                  {[0, 1, 3, 4].map((index) =>
                    screenshots[index] ? (
                      <button
                        key={screenshots[index]}
                        type="button"
                        className="relative flex-1 aspect-video cursor-pointer overflow-hidden rounded-lg border border-[#2a2a2a] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                        onClick={() =>
                          setCarousel({ images: screenshots, index })
                        }
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={screenshots[index]}
                          alt={`Rentroom screenshot ${index + 1}`}
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                      </button>
                    ) : null,
                  )}
                </div>
              )}
            {work.slug === "clinical_data_backed_llm_chat" &&
              screenshots.length > 0 && (
                <div className="mt-8 flex items-start gap-2 sm:gap-3">
                  {screenshots.slice(0, 5).map((src, index) => (
                    <button
                      key={src}
                      type="button"
                      className="block flex-1 cursor-pointer overflow-hidden rounded-lg border border-[#2a2a2a] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                      onClick={() => setCarousel({ images: screenshots, index })}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`ReachRx screenshot ${index + 1}`}
                        className="block h-auto w-full"
                      />
                    </button>
                  ))}
                </div>
              )}
            {work.slug === "ecom_ai_image_gen_platform"
              ? ecomPreChallengeSections.map(renderSection)
              : work.slug === "analytics_dashboard"
                ? analyticsPreChallengeSections.map(renderSection)
                : standardSections.map(renderSection)}

            {work.slug === "ecom_ai_image_gen_platform" && (
              <EcomAiSystemDiagram />
            )}
            {work.slug === "ecom_ai_image_gen_platform" &&
              ecomFromChallengeSections.map(renderSection)}

            {work.slug === "analytics_dashboard" && (
              <FoxsInternalFeaturesDiagram />
            )}
            {work.slug === "analytics_dashboard" &&
              analyticsFromChallengeSections.map(renderSection)}

            {work.slug === "generative_ai_styling_app" && (
              <CuraitArchitectureDiagram />
            )}
            {curaitTradeoffSections.map(renderSection)}
            {work.slug === "rental_management_web_app" && (
              <RentroomMaintenanceDiagram />
            )}
            {work.slug === "internal_dashboard" && <AvantStayTapeChartOutcomes />}

            {galleryDiagrams.length > 0 && (
              <div className="mt-10">
                <div className="grid grid-cols-1 gap-4">
                  {galleryDiagrams.map((src, j) => (
                    <button
                      key={src}
                      type="button"
                      className="block w-full cursor-pointer focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
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
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {galleryScreenshots.slice(0, 3).map((src, j) => (
                    <button
                      key={src}
                      type="button"
                      className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg border border-[#2a2a2a] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                      onClick={() =>
                        setCarousel({ images: galleryScreenshots, index: j })
                      }
                    >
                      <Image
                        src={src}
                        alt={`${work.name} screenshot ${j + 1}`}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="rounded-lg object-cover"
                      />
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
