import styles from './logo.module.scss';

import Image from 'next/image';
 

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
  return (
    <Image src="/images/signs.png" alt="me" width="64" height="64" />
  );
}

export default Logo;
