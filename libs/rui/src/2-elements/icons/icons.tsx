import IconPin from './icon-pin';
import IconLogo from './icon-logo';
import styles from './icons.module.scss';

/* eslint-disable-next-line */
export interface IconsProps {}

export function Icons(props: IconsProps) {
  return (
    <div className={styles['container']}>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Icon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">icon-pin</th>
            <td>
              <IconPin />
            </td>
          </tr>
          <tr>
            <th scope="row">icon-logo</th>
            <td>
              <IconLogo />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Icons;
