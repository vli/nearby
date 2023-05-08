import styles from './cards.module.scss';

/* eslint-disable-next-line */
export interface CardsProps {}

export function Cards(props: CardsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Cards!</h1>
    </div>
  );
}

export default Cards;
