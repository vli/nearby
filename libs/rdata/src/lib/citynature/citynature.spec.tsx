import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useState } from 'react';
import { usePlaces } from './citynature';

describe('Citynature', () => {
  it('should render successfully', () => {
    const [queryClient] = useState(() => new QueryClient());
    
    const enabled = true;
    const city = '5';
    const places = usePlaces(enabled, city);
    const { baseElement } = render(
      <QueryClientProvider client={queryClient}>
        <code>
        {JSON.stringify(places)};
        </code>
      </QueryClientProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
