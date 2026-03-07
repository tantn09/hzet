import { MapPin, Users, Banknote, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { truncateString } from "@/helper/utils/string.utils";

export default function CardItem({ data }: any) {
  const { title, thumbnail, slug, shortDescription, salary, location, quantity } =
    data;
  const image = "https:" + thumbnail?.fields?.file?.url;
  const tags = [
    { icon: Users, value: quantity, color: "text-violet-500" },
    { icon: MapPin, value: location, color: "text-emerald-500" },
    { icon: Banknote, value: salary, color: "text-amber-500" },
  ].filter((t) => t.value);

  return (
    <Link
      href={slug}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/70 transition-all duration-500 hover:-translate-y-1.5 hover:ring-blue-200 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)]"
    >
      <div className="relative overflow-hidden">
        <Image
          src={image}
          className="aspect-4/3 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-[0.85]"
          width={480}
          height={360}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={title || "image"}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

        <div className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-xl bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-500 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-5 text-slate-800 transition-transform duration-300 group-hover:rotate-12" />
        </div>

        {tags.length > 0 && (
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {tags.map(({ icon: Icon, value, color }) => (
              <span
                key={value}
                className="inline-flex items-center gap-1 rounded-lg bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur-sm"
              >
                <Icon className={`size-3 ${color}`} />
                {value}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <h3 className="text-[15px] font-bold leading-snug text-slate-900 transition-colors duration-300 line-clamp-2 group-hover:text-blue-600">
          {truncateString(title, 75)}
        </h3>

        {shortDescription && (
          <p className="text-[13px] leading-relaxed text-slate-400 line-clamp-2">
            {truncateString(shortDescription, 100)}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between border-t border-dashed border-slate-100 pt-3">
          <span className="text-[13px] font-semibold text-blue-600 transition-colors group-hover:text-blue-700">
            Xem chi tiết
          </span>
          <div className="flex size-7 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">
            <ArrowUpRight className="size-3.5 text-blue-600 transition-colors duration-300 group-hover:text-white" />
          </div>
        </div>
      </div>
    </Link>
  );
}
