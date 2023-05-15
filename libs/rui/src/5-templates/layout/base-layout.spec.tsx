import { render } from '@testing-library/react';

import { BaseLayout } from './base-layout';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

describe('BaseLayout', () => {
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

  it('should render successfully', () => {
    const { baseElement } = render(<BaseLayout />);
    expect(baseElement).toBeTruthy();
  });
});
