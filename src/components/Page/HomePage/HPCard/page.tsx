import Link from "next/link";
import CardItem from "@/components/Common/CardItem/page";
type HPCardProps = {
  title: string;
  isDarkBackground?: boolean;
  data: any;
  linkTo: string;
};
export const HPCard = ({
  title,
  isDarkBackground = false,
  data,
  linkTo,
}: HPCardProps) => {
  return (
    <section
      className={`py-14 ${isDarkBackground ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"}`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className={`typo-h2 mb-6 ${isDarkBackground ? "text-white" : "text-slate-900"}`}>
          {title}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item: any) => {
            return (
              <CardItem
                key={item?.sys?.id ?? item?.fields?.slug ?? item?.fields?.title}
                data={item.fields}
              />
            );
          })}
        </div>
        <Link
          href={linkTo}
          className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Xem Them
        </Link>
      </div>
    </section>
  );
};
