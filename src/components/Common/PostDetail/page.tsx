import RichText from "@/components/Common/RichText/page";
export default function PostDetail({ data }: any) {
  const { title, content }: any = data;
  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <h1 className="mb-6 text-3xl font-bold leading-tight text-slate-900">
          {title}
        </h1>
        <RichText content={content} />
      </div>
    </section>
  );
}
