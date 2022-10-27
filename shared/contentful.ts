import * as contentful from 'contentful';

export const DEFAULT_INCLUDE = 10;

export function createClient(preview = false) {
  return contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: (preview
      ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
      : process.env.CONTENTFUL_ACCESS_TOKEN) as string,
    removeUnresolved: true,
    ...(preview ? { host: 'preview.contentful.com' } : {}),
  });
}
