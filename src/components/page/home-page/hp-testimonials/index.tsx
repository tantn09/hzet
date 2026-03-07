"use client";

import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";
import * as m from "motion/react-client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Thời gian đầu mình khá lo lắng vì chưa biết gì về Nhật, nhưng nhờ sự hỗ trợ từ HZET Global, mọi thứ trở nên dễ dàng hơn. Giờ mình đang học tập tại Osaka, mỗi ngày đều là trải nghiệm mới.",
    name: "Lê Thảo Vy",
    role: "Du học sinh tại Osaka",
    avatar: "/images/avatar/1.jpg",
    rating: 5,
  },
  {
    quote:
      "Nhờ sự hỗ trợ nhiệt tình từ HZET Global, em đã hoàn thành hồ sơ nhanh chóng và được đào tạo tiếng bài bản trước khi xuất cảnh. Cuộc sống bên Hàn khá ổn và em rất biết ơn.",
    name: "Phương Nga",
    role: "Du học sinh trường OSAN",
    avatar: "/images/avatar/2.jpg",
    rating: 5,
  },
  {
    quote:
      "Trước khi đến với HZET Global, em cũng rất lo lắng vì chưa biết gì về tiếng Nhật hay cuộc sống bên Nhật như thế nào. Nhờ sự hỗ trợ tận tình, em đã tự tin hơn rất nhiều.",
    name: "Nguyễn Trang",
    role: "TTS đơn hàng nông nghiệp - Aichi",
    avatar: "/images/avatar/3.jpg",
    rating: 5,
  },
  {
    quote:
      "HZET Global đã giúp mình chuẩn bị hồ sơ và luyện phỏng vấn rất kỹ. Nhờ vậy mình đã đỗ visa ngay lần đầu. Rất cảm ơn sự hỗ trợ tận tình của các anh chị.",
    name: "Trần Minh Đức",
    role: "Du học sinh tại Tokyo",
    avatar: "/images/avatar/4.jpg",
    rating: 5,
  },
  {
    quote:
      "Mình rất hài lòng với dịch vụ tư vấn của HZET Global. Mọi thứ đều rõ ràng, minh bạch và luôn được hỗ trợ kịp thời khi cần.",
    name: "Hoàng Thị Mai",
    role: "TTS đơn hàng chế biến thực phẩm",
    avatar: "/images/avatar/5.jpg",
    rating: 5,
  },
];

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <div className="group flex h-full flex-col rounded-3xl bg-white p-6 ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/5 hover:ring-blue-200">
      <Quote className="mb-4 size-8 text-blue-600/15 transition-colors duration-300 group-hover:text-blue-600/40" />

      <p className="flex-1 text-[15px] leading-relaxed text-slate-600">
        &ldquo;{item.quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-dashed border-slate-100 pt-5">
        <Image
          src={item.avatar}
          alt={item.name}
          width={44}
          height={44}
          className="size-11 rounded-full object-cover ring-2 ring-white shadow-sm transition-transform duration-300 group-hover:scale-110"
        />
        <div className="flex-1">
          <div className="text-sm font-bold text-slate-900">{item.name}</div>
          <div className="text-xs text-slate-400">{item.role}</div>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: item.rating }).map((_, idx) => (
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
          <h2 className="typo-h2 text-slate-900">Cảm Nhận Của Khách Hàng</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 sm:text-base">
            Trải qua nhiều năm hoạt động, HZET Global tự hào đã đồng hành cùng
            hàng trăm học sinh, TTS trên hành trình chinh phục ước mơ quốc tế.
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
                <TestimonialCard item={item} />
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
