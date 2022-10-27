import NavigationItem from './NavigationItem';
import styles from './Navigation.module.scss';
import { INavigationLink } from '../../shared/types/contentful';
import { getUrlForNavigationLink } from '../../shared/navigation';

type Props = {
  links: INavigationLink[];
};

export default function Navigation({ links }: Props) {
  return (
    <ul className={styles.navList}>
      {links.map(link => (
        <NavigationItem key={link.sys.id} name={link.fields.title} href={getUrlForNavigationLink(link)} />
      ))}
    </ul>
  );
}
