import { useQuery, useQueryClient } from 'react-query';
import HTTPClient, { checkStatus } from '../http-client/http-client';
import { PlacesInterface } from './citynature-model';

const DATA_URL = `${process.env['NX_CITY_NATURE_SERVER']}/places`;
const STALE_TIME = Infinity;

const dataKeys = {
  all: ['places'] as const,
  lists: () => [...dataKeys.all, 'list'] as const,
  list: (filter: string) => [...dataKeys.lists(), { filter }] as const,
};

async function fetchData(
  city?: string | undefined
): Promise<Array<PlacesInterface>> {
  try {
    const response = city
      ? await HTTPClient.get(`${DATA_URL}?cityid=${city}`)
      : await HTTPClient.get(`${DATA_URL}?cityid=5`);
    checkStatus(response);
    console.debug('PlacesInterface FETCH when city', city);
    console.debug('PlacesInterface FETCH data', response.data);
    return response.data;
  } catch (e) {
    return [];
  }
}

export function usePlaces(enabled: boolean, city?: string | undefined) {
  // set staleTime
  const queryClient = useQueryClient();
  queryClient.setQueryDefaults(dataKeys.all, { staleTime: STALE_TIME });
  return useQuery({
    queryKey: [dataKeys.list, city],
    queryFn: () => fetchData(city),
    enabled: enabled,
  });
}
