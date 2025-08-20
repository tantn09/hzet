import Cards from "@/components/Common/Cards/page";
import client from "@/lib/contentful";

export default async function StudyAbroad() {
  const studyAbroadctf = await client.getEntries({
    content_type: "post",
    "fields.page": "study-abroad",
    include: 1,
  });
  const studyAbroads = studyAbroadctf.items;
  return <Cards headerTitle="Du Học" data={studyAbroads} />;
}
