import { HomePage } from "@/components/Page/HomePage/page";

import { getCtfClient } from "@/lib/contentful";

export const revalidate = 300; // 5m

export default async function Home() {
  const client = getCtfClient({ isPreview: false });
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
    <HomePage news={news} studyAboard={studyAboard} laborExport={laborExport} />
  );
}
