import Image from "next/image";
import Link from "next/link";
import { truncateString } from "@/helper/utils/string.utils";
export default function CardItem({ data }: any) {
  const {
    title,
    thumbnail,
    slug,
    shortDescription,
    salary,
    location,
    quantity,
  } = data;
  const image = "https:" + thumbnail?.fields?.file?.url;
  const isShow = salary || location || quantity;
  return (
    <Link
      href={slug}
      className="block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <Image
        src={image}
        className="h-52 w-full object-cover"
        width={360}
        height={203}
        alt="image"
      />
      <div className="space-y-3 p-4">
        <div className="text-lg font-semibold leading-snug text-slate-900">
          {truncateString(title, 75)}
        </div>
        {isShow && (
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {quantity && (
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Image
                  src={"/icon/quantity.svg"}
                  width={20}
                  height={20}
                  alt="quantity"
                />
                <span>{quantity}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Image
                  src={"/icon/location.svg"}
                  width={20}
                  height={20}
                  alt="location"
                />
                <span>{location}</span>
              </div>
            )}
            {salary && (
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Image
                  src={"/icon/salary.svg"}
                  width={20}
                  height={20}
                  alt="salary"
                />
                <span>{salary}</span>
              </div>
            )}
          </div>
        )}
        {shortDescription && (
          <>
            <hr className="border-slate-200" />
            <div className="text-sm leading-relaxed text-slate-600">
              {truncateString(shortDescription, 110)}
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
