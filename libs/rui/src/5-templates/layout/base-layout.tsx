import styles from './base-layout.module.scss';

/* eslint-disable-next-line */
export interface BaseLayoutProps {}

export function BaseLayout(props: LayoutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Layout!</h1>
    </div>
  );
}

export default BaseLayout;
