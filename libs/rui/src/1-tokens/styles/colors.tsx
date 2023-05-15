import styles from './colors.module.scss';

/* eslint-disable-next-line */
export interface ColorsProps {}

export function Colors(props: ColorsProps) {
  return (
    <div className={styles['container']}>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">CSS</th>
            <th scope="col">Swatch</th>
            <th scope="col">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Primary</th>
            <td>var(--primary)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--primary)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Primary-hover</th>
            <td>var(--primary-hover)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--primary-hover)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Primary-focus</th>
            <td>var(--primary-focus)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--primary-focus)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Primary-inverse</th>
            <td>var(--primary-inverse)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--primary-inverse)' }}></div>
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">Secondary</th>
            <td>var(--secondary)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--secondary)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Secondary-hover</th>
            <td>var(--secondary-hover)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--secondary-hover)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Secondary-focus</th>
            <td>var(--secondary-focus)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--secondary-focus)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Secondary-inverse</th>
            <td>var(--secondary-inverse)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{ backgroundColor: 'var(--secondary-inverse)' }}
              ></div>
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">Contrast</th>
            <td>var(--contrast)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--contrast)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Contrast-hover</th>
            <td>var(--contrast-hover)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--contrast-hover)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Contrast-focus</th>
            <td>var(--contrast-focus)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--contrast-focus)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Contrast-inverse</th>
            <td>var(--contrast-inverse)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--contrast-inverse)' }}></div>
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">Color</th>
            <td>var(--color)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--color)' }}></div>
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">H1 color</th>
            <td>var(--h1-color)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--h1-color)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">H2 color</th>
            <td>var(--h2-color)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--h2-color)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">H3 color</th>
            <td>var(--h3-color)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--h3-color)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">H4 color</th>
            <td>var(--h4-color)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--h4-color)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">H5 color</th>
            <td>var(--h5-color)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--h5-color)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">H6 color</th>
            <td>var(--h6-color)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--h6-color)' }}></div>
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">Muted color</th>
            <td>var(--muted-color)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--muted-color)' }}></div>
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">Mark-color</th>
            <td>var(--mark-color)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--mark-color)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Mark-background-color</th>
            <td>var(--mark-background-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{ backgroundColor: 'var(--mark-background-color)' }}
              ></div>
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">Ins-color</th>
            <td>var(--ins-color)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--ins-color)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Del-color</th>
            <td>var(--del-color)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--del-color)' }}></div>
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">Form-element-background-color</th>
            <td>var(--form-element-background-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{
                  backgroundColor: 'var(--form-element-background-color)',
                }}
              ></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Form-element-border-color</th>
            <td>var(--form-element-border-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{ backgroundColor: 'var(--form-element-border-color)' }}
              ></div>
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">Form-element-color</th>
            <td>var(--form-element-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{ backgroundColor: 'var(--form-element-color)' }}
              ></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Form-element-placeholder-color</th>
            <td>var(--form-element-placeholder-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{
                  backgroundColor: 'var(--form-element-placeholder-color)',
                }}
              ></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Form-element-active-background-color</th>
            <td>var(--form-element-active-background-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{
                  backgroundColor:
                    'var(--form-element-active-background-color)',
                }}
              ></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Form-element-active-border-color</th>
            <td>var(--form-element-active-border-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{
                  backgroundColor: 'var(--form-element-active-border-color)',
                }}
              ></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Form-element-focus-color</th>
            <td>var(--form-element-focus-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{ backgroundColor: 'var(--form-element-focus-color)' }}
              ></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Form-element-disabled-background-color</th>
            <td>var(--form-element-disabled-background-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{
                  backgroundColor:
                    'var(--form-element-disabled-background-color)',
                }}
              ></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Form-element-disabled-border-color</th>
            <td>var(--form-element-disabled-border-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{
                  backgroundColor: 'var(--form-element-disabled-border-color)',
                }}
              ></div>
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">Form-element-invalid-background-color</th>
            <td>var(--form-element-invalid-background-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{
                  backgroundColor:
                    'var(--form-element-invalid-background-color)',
                }}
              ></div>
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">Form-element-invalid-border-color</th>
            <td>var(--form-element-invalid-border-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{
                  backgroundColor: 'var(--form-element-invalid-border-color)',
                }}
              ></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Form-element-invalid-active-border-color</th>
            <td>var(--form-element-invalid--active-border-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{
                  backgroundColor:
                    'var(--form-element-invalid-active-border-color)',
                }}
              ></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Form-element-invalid-focus-border-color</th>
            <td>var(--form-element-invalid--focus-border-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{
                  backgroundColor:
                    'var(--form-element-invalid-focus-border-color)',
                }}
              ></div>
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">Form-element-valid-border-color</th>
            <td>var(--form-element-valid-border-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{
                  backgroundColor: 'var(--form-element-valid-border-color)',
                }}
              ></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Form-element-valid-active-border-color</th>
            <td>var(--form-element-valid--active-border-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{
                  backgroundColor:
                    'var(--form-element-valid-active-border-color)',
                }}
              ></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Form-element-valid-focus-border-color</th>
            <td>var(--form-element-valid--focus-border-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{
                  backgroundColor:
                    'var(--form-element-valid-focus-border-color)',
                }}
              ></div>
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">Switch-color</th>
            <td>var(--switch-color)</td>
            <td className={`${styles['swatch']}`}>
              <div style={{ backgroundColor: 'var(--switch-color)' }}></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Switch-background-color</th>
            <td>var(--switch-background-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{ backgroundColor: 'var(--switch-background-color)' }}
              ></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Switch-checked-background-color</th>
            <td>var(--switch-checked-background-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{
                  backgroundColor: 'var(--switch-checked-background-color)',
                }}
              ></div>
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">Range-border-color</th>
            <td>var(--range-border-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{ backgroundColor: 'var(--range-border-color)' }}
              ></div>
            </td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">Blockquote-border-color</th>
            <td>var(--blockquote-border-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{ backgroundColor: 'var(--blockquote-border-color)' }}
              ></div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">Blockquote-footer-color</th>
            <td>var(--blockquote-footer-color)</td>
            <td className={`${styles['swatch']}`}>
              <div
                style={{ backgroundColor: 'var(--blockquote-footer-color)' }}
              ></div>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Colors;
