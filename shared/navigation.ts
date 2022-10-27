import { CONTENT_TYPE, IHomePage, INavigationLink, IPage } from './types/contentful';

export function getUrlForNavigationLink(link: INavigationLink) {
  const page = link.fields.page;
  const contentType = page.sys.contentType.sys.id as CONTENT_TYPE;

  return getUrlForPage(contentType, page);
}

export function getUrlForPage(contentType: CONTENT_TYPE, page: IHomePage | IPage) {
  switch (contentType as CONTENT_TYPE) {
    case 'homePage':
      return '/';
    case 'page':
      return `/${(page as IPage).fields.slug}`;
    default:
      throw new Error(`Failed to get url for page of type ${contentType}`);
  }
}
