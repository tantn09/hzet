import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug") || "/";

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new NextResponse("Invalid token", { status: 401 });
  }

  (await draftMode()).enable();
  return NextResponse.redirect(new URL(slug, req.url));
}