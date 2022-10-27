import { GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';

import Layout from '../features/app/Layout';
import { getHomePage } from '../services/page-service';
import { getLayoutProps } from '../shared/layout';

const HomePage = dynamic(() => import('../features/home/HomePage'));

export const getStaticProps: GetStaticProps = async ({ locale, preview }) => {
  const layoutProps = await getLayoutProps(locale, preview);
  const page = await getHomePage(locale, preview);

  return {
    revalidate: 10,
    props: {
      ...layoutProps,
      page,
    },
  };
};

export default function Index({ page, navigation }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout navigation={navigation}>
      <HomePage page={page} />
    </Layout>
  );
}
