import { PropsWithChildren } from 'react';
import styles from './Container.module.scss';

type Props = {
  tag?: keyof JSX.IntrinsicElements;
};

export default function Container({ tag, children }: PropsWithChildren<Props>) {
  const ContainerElement = tag ?? 'div';

  return <ContainerElement className={styles.container}>{children}</ContainerElement>;
}
