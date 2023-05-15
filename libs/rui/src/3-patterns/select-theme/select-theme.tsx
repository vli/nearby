import styles from './select-theme.module.scss';
import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

/* eslint-disable-next-line */
export interface SelectThemeProps {}

export function SelectTheme(props: SelectThemeProps) {
  const { t } = useTranslation('common');

  const [docMode, setDocMode] = useState('auto');

  const listRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', docMode);
  }, [docMode]);

  // TBD: store mode to the local storage etc..
  const selectMode = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const target: HTMLAnchorElement = event.currentTarget;
    setDocMode(target.id);
    if (listRef) {
      listRef.current?.removeAttribute('open');
    }
  };

  return (
    <details role="list" dir="rtl" id="theme-selector" ref={listRef}>
      <summary
        aria-haspopup="listbox"
        role="link"
        className={styles['theme-button']}
      >
        {t('Theme')}
      </summary>
      <ul role="listbox" className={styles['theme-list']}>
        <li>
          <a
            href="#auto"
            id="auto"
            className={docMode === 'auto' ? 'selected' : ''}
            onClick={selectMode}
          >
            {t('Auto')}
          </a>
        </li>
        <li>
          <a
            id="light"
            href="#light"
            className={docMode === 'light' ? 'selected' : ''}
            onClick={selectMode}
          >
            {t('Light')}
          </a>
        </li>
        <li>
          <a
            id="dark"
            href="#dark"
            className={docMode === 'dark' ? 'selected' : ''}
            onClick={selectMode}
          >
            {t('Dark')}
          </a>
        </li>
      </ul>
    </details>
  );
}

export default SelectTheme;
