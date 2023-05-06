import styles from './index.module.scss';
import Logo from '../../components/logo/logo';
import { Header } from '@tonearby/react-ui';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div className={styles['container']}>
      <Header>
        <Logo />
        <h1>Welcome to Home!</h1>
      </Header>
    </div>
  );
}

export default Home;
