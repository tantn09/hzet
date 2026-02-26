import CardItem from "@/components/Common/CardItem/page";
export default function Cards({ headerTitle, data }: any) {
  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
          {headerTitle}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item: any) => {
            return (
              <CardItem
                key={item?.sys?.id ?? item?.fields?.slug ?? item?.fields?.title}
                data={item?.fields}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
