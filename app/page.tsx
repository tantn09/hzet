import { HomePage } from "@/components/Page/HomePage/page";
import client from "@/lib/contentful";
import HomeLayout from "./home.layout";

export const revalidate = 60; // 60 giây

export default async function Home() {
  const newsctf = await client.getEntries({
    content_type: "post",
    "fields.page": "news",
    order: ["-sys.createdAt"],
    include: 1,
    limit: 3,
  });
  const news = newsctf.items;

  const studyAboardctf = await client.getEntries({
    content_type: "post",
    "fields.page": "study-abroad",
    order: ["-sys.createdAt"],
    include: 1,
    limit: 3,
  });
  const studyAboard = studyAboardctf.items;

  const laborExportctf = await client.getEntries({
    content_type: "post",
    "fields.page": "labor-export",
    order: ["-sys.createdAt"],
    include: 1,
    limit: 3,
  });
  const laborExport = laborExportctf.items;
  return (
    <HomeLayout>
      <HomePage
        news={news}
        studyAboard={studyAboard}
        laborExport={laborExport}
      />
    </HomeLayout>
  );
}
