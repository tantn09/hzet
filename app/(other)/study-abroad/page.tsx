import Cards from "@/components/Common/Cards/page";
import { getCtfClient } from "@/lib/contentful";
import { draftMode } from "next/headers";

export const revalidate = 300; // 5m

export default async function StudyAbroad() {
  const { isEnabled } = await draftMode();
  const client = getCtfClient({ isPreview: isEnabled })
  const studyAbroadctf = await client.getEntries({
    content_type: "post",
    "fields.page": "study-abroad",
    include: 1,
  });
  const studyAbroads = studyAbroadctf.items;
  return <Cards headerTitle="Du Học" data={studyAbroads} />;
}
