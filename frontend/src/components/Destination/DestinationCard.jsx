// InfiniteCarouselResponsive.jsx
import React, { useEffect, useRef, useState } from "react";
import FeatureCard from "./FeatureCard"; // update path if needed

export default function InfiniteCarouselResponsive({
  items = [],
  autoPlay = true,
  autoPlayInterval = 3500,
}) {
  const getVisibleCount = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [index, setIndex] = useState(visibleCount);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const timer = useRef(null);
  const startX = useRef(0);
  const endX = useRef(0);

  // Handle resize
  useEffect(() => {
    const onResize = () => {
      const v = getVisibleCount();
      setVisibleCount((prev) => (prev !== v ? v : prev));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const n = items.length;

  const slides = [
    ...items.slice(n - visibleCount),
    ...items,
    ...items.slice(0, visibleCount),
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    setIsTransitioning(false);
    setIndex(visibleCount);
    const t = setTimeout(() => setIsTransitioning(true), 20);
    return () => clearTimeout(t);
  }, [visibleCount, n]);

  useEffect(() => {
    if (!autoPlay || n <= 1) return;
    clearInterval(timer.current);
    timer.current = setInterval(() => next(), autoPlayInterval);
    return () => clearInterval(timer.current);
  }, [index, visibleCount, n]);

  const next = () => {
    setIsTransitioning(true);
    setIndex((i) => i + 1);
  };

  const prev = () => {
    setIsTransitioning(true);
    setIndex((i) => i - 1);
  };

  const onTransitionEnd = () => {
    const realStart = visibleCount;
    const realEnd = visibleCount + n - 1;

    if (index > realEnd) {
      setIsTransitioning(false);
      setIndex(realStart);
    }
    if (index < realStart) {
      setIsTransitioning(false);
      setIndex(realEnd);
    }
  };

  const goToDot = (i) => {
    setIsTransitioning(true);
    setIndex(visibleCount + i);
  };

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    const diff = startX.current - endX.current;
    if (diff > 40) next();
    else if (diff < -40) prev();
  };

  if (!n) return null;

  const slideWidth = 100 / visibleCount;
  const translateX = index * slideWidth;

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-6xl">

        {/* SLIDER */}
        <div
          className="overflow-hidden rounded-3xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex"
            style={{
              width: `${totalSlides * slideWidth}%`,
              transform: `translateX(-${translateX}%)`,
              transition: isTransitioning ? "transform 0.5s ease" : "none",
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {slides.map((item, idx) => (
              <div
                key={idx}
                style={{ width: `${slideWidth}%` }}
                className="px-3"
              >
                <FeatureCard {...item} />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          ◀
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          ▶
        </button>

        {/* DOTS */}
        <div className="flex justify-center mt-4 gap-2">
          {items.map((_, i) => {
            const active =
              index >= visibleCount + i &&
              index < visibleCount + i + visibleCount;

            return (
              <button
                key={i}
                onClick={() => goToDot(i)}
                className={`h-2 rounded-full transition-all ${
                  active ? "w-8 bg-blue-600" : "w-3 bg-gray-400"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
