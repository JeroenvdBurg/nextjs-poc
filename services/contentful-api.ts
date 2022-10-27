import { CONTENT_TYPE } from '../shared/types/contentful';
import { DEFAULT_LOCALE } from '../shared/locale';
import { createClient, DEFAULT_INCLUDE } from '../shared/contentful';

const contentfulClient = createClient();
const contentfulPreviewClient = createClient(true);

function getClient(preview = false) {
  return preview ? contentfulPreviewClient : contentfulClient;
}

export async function getEntry<T = unknown>(
  contentType: CONTENT_TYPE,
  id: string,
  locale = DEFAULT_LOCALE,
  preview = false,
  include = DEFAULT_INCLUDE,
): Promise<T | null> {
  try {
    const data = await getClient(preview).getEntry(id, {
      content_type: contentType,
      include,
      locale,
    });

    return data as unknown as T;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getEntries<T = unknown>(
  contentType: CONTENT_TYPE,
  locale = DEFAULT_LOCALE,
  preview = false,
  include = DEFAULT_INCLUDE,
): Promise<T[] | null> {
  try {
    const data = await getClient(preview).getEntries({
      content_type: contentType,
      include,
      locale,
    });

    return data.items as unknown as T[];
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getEntryBySlug<T = unknown>(
  contentType: CONTENT_TYPE,
  slug: string,
  locale = DEFAULT_LOCALE,
  preview = false,
  include = DEFAULT_INCLUDE,
): Promise<T | null> {
  try {
    const data = await getClient(preview).getEntries({
      include: include,
      locale,
      content_type: contentType,
      'fields.slug[in]': slug,
    });

    return data.items[0] as unknown as T;
  } catch (error) {
    console.error(error);
    return null;
  }
}
