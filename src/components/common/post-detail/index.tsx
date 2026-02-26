import RichText from "@/components/common/rich-text";
export default function PostDetail({ data }: any) {
  const { title, content }: any = data;
  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <h1 className="typo-h1 mb-6 text-slate-900">
          {title}
        </h1>
        <RichText content={content} />
      </div>
    </section>
  );
}
