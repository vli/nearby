import IconLogo from '../../2-elements/icons/icon-logo';
import SelectTheme from '../../3-patterns/select-theme/select-theme';
import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header data-theme="dark" className={styles['header']}>
      <nav>
        <ul>
          <li className={styles['brand']}>
            <IconLogo />
            <strong>To Be Near</strong>
          </li>
        </ul>

        <ul>
          <li>
            <SelectTheme />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
