import Cards from "@/components/Common/Cards/page";
import { getCtfClient } from "@/lib/contentful";
import { draftMode } from "next/headers";

export const revalidate = 300; // 5m

export default async function News() {
  const { isEnabled } = await draftMode();
  const client = getCtfClient({ isPreview: isEnabled });
  const newsCtf = await client.getEntries({
    content_type: "post",
    "fields.page": "news",
    include: 1,
  });
  const news = newsCtf.items;
  return <Cards headerTitle="Tin Tức" data={news} />;
}
