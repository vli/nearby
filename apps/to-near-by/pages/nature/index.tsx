import { MapHel } from '@tonearby/rui';
import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface NatureProps {}

export function Nature(props: NatureProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Nature!</h1>

      <MapHel/>
    </div>
  );
}

export default Nature;
