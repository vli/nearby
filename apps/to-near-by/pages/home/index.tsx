import styles from './index.module.scss';

import { Header } from '@tonearby/rui';
import { usePlaces } from '@tonearby/rdata';

import Logo from '../../components/logo/logo';
/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const enabled = true;
  const city = '5';
  const places = usePlaces(enabled, city);

  return (
    <div className={styles['container']}>
      <Header>
        <Logo />
      </Header>
      <h1>Welcome to Home!</h1>
      {places.isLoading && <div className="small">Loading...</div>}
      {places.isError && <div className="error">Something went wrong...</div>}
      {places.isSuccess && (
        <>
          <h2>Places</h2>
          <code>{JSON.stringify(places)}</code>
        </>
      )}
    </div>
  );
}

export default Home;
