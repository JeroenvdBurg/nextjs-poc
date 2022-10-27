import { GetStaticProps, InferGetStaticPropsType } from 'next';

import Container from '../features/app/Container';
import Layout from '../features/app/Layout';
import { getLayoutProps } from '../shared/layout';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const layoutProps = await getLayoutProps(locale);

  return {
    props: {
      ...layoutProps,
    },
  };
};

export default function Unhandled({ navigation }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout navigation={navigation}>
      <Container>
        <h1>500 - Something went wrong</h1>
      </Container>
    </Layout>
  );
}
