import { getNavigation } from '../services/page-service';
import { INavigation } from './types/contentful';

export type LayoutProps = {
  navigation: INavigation;
};

export async function getLayoutProps(locale?: string, preview?: boolean): Promise<LayoutProps> {
  const navigation = await getNavigation(locale, preview);

  if (!navigation) {
    throw new Error('Failed to fetch navigation');
  }

  return { navigation };
}
