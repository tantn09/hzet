"use client";

import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";
import * as m from "motion/react-client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const TESTIMONIAL_COUNT = 5;
const AVATARS = [
  "/images/avatar/1.jpg",
  "/images/avatar/2.jpg",
  "/images/avatar/3.jpg",
  "/images/avatar/4.jpg",
  "/images/avatar/5.jpg",
];

function TestimonialCard({
  quote,
  name,
  role,
  avatar,
}: {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}) {
  return (
    <div className="group flex h-full flex-col rounded-3xl bg-white p-6 ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/5 hover:ring-blue-200">
      <Quote className="mb-4 size-8 text-blue-600/15 transition-colors duration-300 group-hover:text-blue-600/40" />

      <p className="flex-1 text-[15px] leading-relaxed text-slate-600">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-dashed border-slate-100 pt-5">
        <Image
          src={avatar}
          alt={name}
          width={44}
          height={44}
          className="size-11 rounded-full object-cover ring-2 ring-white shadow-sm transition-transform duration-300 group-hover:scale-110"
        />
        <div className="flex-1">
          <div className="text-sm font-bold text-slate-900">{name}</div>
          <div className="text-xs text-slate-400">{role}</div>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={`star-${idx}`}
              className="size-3.5 fill-amber-400 text-amber-400 transition-transform duration-300 group-hover:scale-110"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const HPTestimonials = () => {
  const t = useTranslations("homePage.testimonials");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const testimonials = Array.from({ length: TESTIMONIAL_COUNT }, (_, i) => ({
    quote: t(`quote${i + 1}`),
    name: t(`name${i + 1}`),
    role: t(`role${i + 1}`),
    avatar: AVATARS[i],
  }));

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
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

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
      <div className="absolute -right-32 top-0 size-96 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -left-32 bottom-0 size-80 rounded-full bg-amber-100/40 blur-3xl" />

      <div className="relative mx-4 max-w-[1344px] md:mx-6 lg:mx-12 2xl:mx-auto">
        <m.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-blue-600" />
          <h2 className="typo-h2 text-slate-900">{t("title")}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 sm:text-base">
            {t("desc")}
          </p>
        </m.div>

        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4 py-2">
            {testimonials.map((item) => (
              <CarouselItem
                key={item.name}
                className="pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {count > 0 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  current === i
                    ? "h-2.5 w-8 bg-blue-600"
                    : "size-2.5 bg-slate-300 hover:bg-slate-400"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
