import { IPage } from '../../shared/types/contentful';
import Container from '../app/Container';
import PageMeta from '../app/PageMeta';
import ContentBlock from './ContentBlock';
import Markdown from './Markdown';

type Props = {
  page: IPage;
};

export default function ContentPage({ page }: Props) {
  return (
    <>
      <PageMeta title={page.fields.title} description={page.fields.metaDescription} />
      <Container>
        <h1>{page.fields.title}</h1>
        {page.fields.description && <Markdown text={page.fields.description} />}
      </Container>
      {page.fields.contentBlocks.map((block, index) => (
        <Container key={index}>
          <ContentBlock data={block} />
        </Container>
      ))}
    </>
  );
}
