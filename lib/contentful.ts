import { createClient } from "contentful";

const baseCfg = {
  space: process.env.CONTENTFUL_SPACE_ID!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
};

export function getCtfClient({ isPreview = false } = {}) {
  return createClient({
    ...baseCfg,
    host: isPreview ? "preview.contentful.com" : "cdn.contentful.com",
    accessToken: isPreview
      ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!
      : process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
}
