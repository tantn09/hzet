import Cards from "@/components/Common/Cards/page";
import { getCtfClient } from "@/lib/contentful";
import { draftMode } from "next/headers";

export const revalidate = 300; // 5m

export default async function LaborExport() {
  const { isEnabled } = await draftMode(); 
  const client = getCtfClient({ isPreview: isEnabled })
  const laborExportctf = await client.getEntries({
    content_type: "post",
    "fields.page": "labor-export",
    include: 1,
  });
  const laborExports = laborExportctf.items;
  return <Cards headerTitle="Cung ứng lao động" data={laborExports} />;
}
