import { IHomePage, INavigation, IPage } from '../shared/types/contentful';
import { getEntries, getEntryBySlug } from './contentful-api';

export async function getNavigation(locale?: string, preview?: boolean) {
  const response = await getEntries<INavigation>('navigation', locale, preview);

  if (!response) {
    return null;
  }

  return response[0];
}

export async function getHomePage(locale?: string, preview?: boolean) {
  const response = await getEntries<IHomePage>('homePage', locale, preview);

  if (!response) {
    return null;
  }

  return response[0];
}

export async function getContentPage(slug: string, locale?: string, preview?: boolean) {
  const response = await getEntryBySlug<IPage>('page', slug, locale, preview);

  if (!response) {
    return null;
  }

  return response;
}
