import PostDetail from "@/components/Common/PostDetail/page";
import client from "@/lib/contentful";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function StudyAbroadtDetail({ params }: Props) {
  const { slug } = await params;
  const url = "/study-abroad/" + slug;
  const newsctf = await client.getEntries({
    content_type: "post",
    "fields.page": "study-abroad",
    "fields.slug": url,
    include: 1,
    limit: 1,
  });

  const news = newsctf.items[0];

  if (!news) {
    notFound(); // 👈 tự động hiển thị trang 404
  }

  return <PostDetail data={news?.fields} />;
}
