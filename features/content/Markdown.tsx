import { marked } from 'marked';

import styles from './Markdown.module.scss';

type Props = {
  text: string;
};

export default function Markdown({ text }: Props) {
  const markdown = marked(text);

  return <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: markdown }} />;
}
