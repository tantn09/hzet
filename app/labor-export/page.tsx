import Cards from "@/components/Common/Cards/page";
import client from "@/lib/contentful";

export const revalidate = 300; // 5m

export default async function LaborExport() {
  const laborExportctf = await client.getEntries({
    content_type: "post",
    "fields.page": "labor-export",
    include: 1,
  });
  const laborExports = laborExportctf.items;
  return <Cards headerTitle="Xuất Khẩu Lao Động" data={laborExports} />;
}
