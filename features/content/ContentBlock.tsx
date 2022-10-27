import classNames from 'classnames';

import { IContentBlock } from '../../shared/types/contentful';
import CmsImage from './CmsImage';
import Markdown from './Markdown';

import styles from './ContentBlock.module.scss';

type Props = {
  data: IContentBlock;
};

export default function ContentBlock({ data }: Props) {
  const { title, text, image, alignLeft } = data.fields;
  const classes = classNames([styles.contentBlock, { [styles.reversed]: !alignLeft }]);

  return (
    <div className={classes}>
      <div className={styles.contentBlock_left}>
        <h2>{title}</h2>
        <Markdown text={text} />
      </div>
      {image && (
        <div className={styles.contentBlock_right}>
          <CmsImage image={image} layout="fill" sizes="45vw" objectFit="cover" />
        </div>
      )}
    </div>
  );
}
