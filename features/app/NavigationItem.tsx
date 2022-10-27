import * as React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './NavigationItem.module.scss';

type Props = {
  name: string;
  href: string;
};

export default function NavigationItem({ name, href }: Props) {
  const router = useRouter();
  const isActive = router.asPath === href;
  const classes = classNames(styles.navListItem, { [styles.active]: isActive });

  return (
    <li className={classes}>
      <Link href={href}>
        <a>{name}</a>
      </Link>
    </li>
  );
}
