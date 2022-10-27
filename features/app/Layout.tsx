import { PropsWithChildren } from 'react';

import Container from './Container';
import LocaleToggle from './LocaleToggle';
import Navigation from './Navigation';
import { INavigation } from '../../shared/types/contentful';

import styles from './Layout.module.scss';

type Props = {
  navigation: INavigation;
};

export default function Layout({ navigation, children }: PropsWithChildren<Props>) {
  return (
    <div>
      <Container tag="header">
        <div className={styles.headerInner}>
          <Navigation links={navigation.fields.links} />
          <LocaleToggle />
        </div>
      </Container>
      <main>{children}</main>
    </div>
  );
}
