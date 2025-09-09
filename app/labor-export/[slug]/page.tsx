import PostDetail from "@/components/Common/PostDetail/page";
import { getCtfClient } from "@/lib/contentful";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function LaborExportDetail({ params }: Props) {
    const { isEnabled } = await draftMode(); 
  const client = getCtfClient({ isPreview: isEnabled })
  const { slug } = await params;
  const url = "/labor-export/" + slug;
  const newsctf = await client.getEntries({
    content_type: "post",
    "fields.page": "labor-export",
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
