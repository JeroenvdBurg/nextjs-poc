import { NextApiRequest, NextApiResponse } from 'next';
import { getEntryBySlug } from '../../services/contentful-api';
import { getHomePage } from '../../services/page-service';
import { getUrlForPage } from '../../shared/navigation';
import { CONTENT_TYPE, IPage } from '../../shared/types/contentful';

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  const { secret, slug, type } = req.query;

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !type || typeof type !== 'string') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const hasSlug = typeof slug === 'string';
  const contentType = type as CONTENT_TYPE;
  const page = hasSlug
    ? ((await getEntryBySlug(contentType, slug, undefined, true)) as IPage)
    : await getHomePage(undefined, true);

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!page) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  const url = getUrlForPage(contentType, page);

  res.setPreviewData({});
  res.redirect(url);
}
