"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { INSTRUCTORS } from "@/lib/constants/instructors";
import { InstructorCard } from "./InstructorCard";

function getSlides(track: HTMLDivElement) {
  return Array.from(track.querySelectorAll<HTMLElement>("[data-slide]"));
}

function getSlidesPerView(track: HTMLDivElement, slides: HTMLElement[]) {
  if (slides.length === 0) return 1;
  const slideSpan = slides[0].offsetWidth + 24;
  return Math.max(1, Math.floor((track.clientWidth + 24) / slideSpan));
}

function getActiveIndex(track: HTMLDivElement, slides: HTMLElement[]) {
  if (slides.length === 0) return 0;

  const scrollLeft = track.scrollLeft;
  let closest = 0;
  let closestDist = Infinity;

  slides.forEach((slide, i) => {
    const dist = Math.abs(slide.offsetLeft - scrollLeft);
    if (dist < closestDist) {
      closestDist = dist;
      closest = i;
    }
  });

  return closest;
}

export function InstructorCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [activePage, setActivePage] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const slides = getSlides(track);
    const { scrollLeft, scrollWidth, clientWidth } = track;

    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);

    const perView = getSlidesPerView(track, slides);
    const pages = Math.max(1, Math.ceil(slides.length / perView));
    const index = getActiveIndex(track, slides);
    const page = Math.min(Math.floor(index / perView), pages - 1);

    setActiveIndex(index);
    setPageCount(pages);
    setActivePage(page);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollBySlide = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    const slides = getSlides(track);
    const perView = getSlidesPerView(track, slides);
    const targetPage = Math.max(
      0,
      Math.min(
        pageCount - 1,
        activePage + (direction === "left" ? -1 : 1),
      ),
    );
    scrollToPage(targetPage, track, slides, perView);
  };

  const scrollToPage = (
    page: number,
    track = trackRef.current,
    slides = track ? getSlides(track) : [],
    perView = track ? getSlidesPerView(track, slides) : 1,
  ) => {
    if (!track || slides.length === 0) return;

    const index = Math.min(page * perView, slides.length - 1);
    track.scrollTo({ left: slides[index].offsetLeft, behavior: "smooth" });
  };

  return (
    <div className="relative mt-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-gradient-to-r from-brand-black to-transparent sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-brand-black to-transparent sm:block" />

      <div
        ref={trackRef}
        className="carousel-track flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 scroll-smooth"
      >
        {INSTRUCTORS.map((instructor) => (
          <div
            key={instructor.id}
            data-slide
            className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          >
            <InstructorCard instructor={instructor} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToPage(i)}
              aria-label={`Go to page ${i + 1}`}
              aria-current={i === activePage ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activePage
                  ? "w-6 bg-brand-red"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => scrollBySlide("left")}
            disabled={!canScrollLeft}
            aria-label="Previous instructors"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-white transition-all hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBySlide("right")}
            disabled={!canScrollRight}
            aria-label="Next instructors"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-white transition-all hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-white/30 sm:text-left">
        {activeIndex + 1} of {INSTRUCTORS.length} instructors
      </p>
    </div>
  );
}
