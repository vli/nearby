import { render } from '@testing-library/react';

import SelectTheme from './select-theme';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  resources: { en: { common: {} } },
});

describe('SelectTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectTheme />);
    expect(baseElement).toBeTruthy();
  });
});
