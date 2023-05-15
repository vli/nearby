import Header from '../../4-blocks/header/header';
import styles from './base-layout.module.scss';

/* eslint-disable-next-line */
export interface BaseLayoutProps {
  children?: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer />
    </>
  );
}
