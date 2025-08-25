import Cards from "@/components/Common/Cards/page";
import client from "@/lib/contentful";

export const revalidate = 300; // 5m

export default async function News() {
  const newsCtf = await client.getEntries({
    content_type: "post",
    "fields.page": "news",
    include: 1,
  });
  const news = newsCtf.items;
  return <Cards headerTitle="Tin Tức" data={news} />;
}
