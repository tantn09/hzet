import PostDetail from "@/components/common/post-detail";
import { getCtfClient } from "@/lib/contentful";
import { draftMode } from "next/headers";

import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function NewsDetail({ params }: Props) {
  const { isEnabled } = await draftMode();
  const client = getCtfClient({ isPreview: isEnabled });
  const { slug } = await params;
  const url = "/news/" + slug;
  const newsctf = await client.getEntries({
    content_type: "post",
    "fields.page": "news",
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
