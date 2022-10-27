import { IHomePage } from '../../shared/types/contentful';
import Container from '../app/Container';
import PageMeta from '../app/PageMeta';
import ContentBlock from '../content/ContentBlock';
import Markdown from '../content/Markdown';

type Props = {
  page: IHomePage;
};

export default function HomePage({ page }: Props) {
  return (
    <>
      <PageMeta title={page.fields.title} description={page.fields.metaDescription} postFix={false} />
      <Container>
        <h1>{page.fields.title}</h1>
        <Markdown text={page.fields.description} />
      </Container>
      {page.fields.contentBlocks.map((block, index) => (
        <Container key={index}>
          <ContentBlock data={block} />
        </Container>
      ))}
    </>
  );
}
