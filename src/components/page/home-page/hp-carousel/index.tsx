"use client";

import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as m from "motion/react-client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 5000;

const slides = [
  { image: "/images/slider/1.jpg", titleKey: "slide1Title", descKey: "slide1Desc" },
  { image: "/images/slider/1.jpg", titleKey: "slide2Title", descKey: "slide2Desc" },
  { image: "/images/slider/1.jpg", titleKey: "slide3Title", descKey: "slide3Desc" },
] as const;

export function HPCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const t = useTranslations("homePage.carousel");

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    setProgress(0);
    startRef.current = performance.now();
  }, [api]);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    startRef.current = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const pct = Math.min((elapsed / AUTOPLAY_MS) * 100, 100);
      setProgress(pct);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [current]);

  return (
    <m.section
      className="group/carousel relative w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Carousel
        opts={{ loop: true, duration: 30 }}
        plugins={[Autoplay({ delay: AUTOPLAY_MS, stopOnInteraction: false })]}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative overflow-hidden">
                <Image
                  src={slide.image}
                  alt={t(slide.titleKey)}
                  width={1920}
                  height={1080}
                  sizes="100vw"
                  className={cn(
                    "h-auto w-full transition-transform duration-4000 ease-out",
                    current === index ? "scale-110" : "scale-100"
                  )}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />

                <div className="absolute inset-x-0 bottom-0 mx-4 max-w-[1344px] pb-20 md:mx-6 md:pb-24 lg:mx-12 2xl:mx-auto">
                  <m.h2
                    className="mb-3 max-w-2xl text-3xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-4xl lg:text-5xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: current === index ? 1 : 0,
                      y: current === index ? 0 : 30,
                    }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {t(slide.titleKey)}
                  </m.h2>
                  <m.p
                    className="max-w-lg text-sm leading-relaxed text-white/80 sm:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: current === index ? 1 : 0,
                      y: current === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                  >
                    {t(slide.descKey)}
                  </m.p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Nav arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => api?.scrollPrev()}
        className="absolute left-4 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/25 hover:scale-110 opacity-0 group-hover/carousel:opacity-100 md:left-6 md:size-12"
      >
        <ArrowLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => api?.scrollNext()}
        className="absolute right-4 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/25 hover:scale-110 opacity-0 group-hover/carousel:opacity-100 md:right-6 md:size-12"
      >
        <ArrowRight className="size-5" />
      </button>

      {/* Subtle progress bars */}
      {count > 0 && (
        <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-2 md:bottom-8">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={`dot-${i}`}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className="h-0.5 w-8 overflow-hidden rounded-full bg-white/15 transition-all duration-300 hover:bg-white/25 md:w-12"
            >
              <div
                className={cn(
                  "h-full rounded-full",
                  current === i ? "bg-white/60" : "bg-transparent"
                )}
                style={{
                  width: current === i ? `${progress}%` : "0%",
                  transition: "width 100ms linear",
                }}
              />
            </button>
          ))}
        </div>
      )}
    </m.section>
  );
}
