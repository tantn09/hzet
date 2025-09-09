import { getCtfClient } from "@/lib/contentful";
import { draftMode } from "next/headers";

export async function getPostsPage(type = "news", page = 1, pageSize = 12) {
  const { isEnabled } = await draftMode(); 
  const client = getCtfClient({ isPreview: isEnabled })
  const limit = Math.min(pageSize, 100);
  const skip = (Math.max(page, 1) - 1) * limit;

  const res = await client.getEntries({
    content_type: "post",
    "fields.page": "study-abroad",
    include: 1,
  });

  const total = res.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  return {
    items: res.items,
    page,
    pageSize: limit,
    total,
    totalPages,
    hasPrev: page > 1,
    hasNext: page < totalPages,
  };
}