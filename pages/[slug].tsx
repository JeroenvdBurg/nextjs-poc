import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';

import Layout from '../features/app/Layout';
import { getContentPage } from '../services/page-service';
import { getLayoutProps } from '../shared/layout';

const ContentPage = dynamic(() => import('../features/content/ContentPage'));

export const getStaticProps: GetStaticProps = async ({ params, locale, preview }) => {
  const slug = (params?.slug as string) || '';
  const layoutProps = await getLayoutProps(locale, preview);
  const page = await getContentPage(slug, locale, preview);

  return {
    revalidate: 10,
    notFound: !page,
    props: {
      ...layoutProps,
      page,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export default function Index({ page, navigation }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout navigation={navigation}>
      <ContentPage page={page} />
    </Layout>
  );
}
