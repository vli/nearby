import styles from './index.module.scss';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PlacesInterface, usePlaces, useTrailStore } from '@tonearby/rdata';
import { useTranslation } from 'react-i18next';
import { MapIt } from '@tonearby/rui';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface TrailProps {}

export function Trail(props: TrailProps) {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { id } = router.query;

  const { selectedCity } = useTrailStore();
  const [queryEnabled, setQueryEnabled] = useState(true);
  const [place, setPlace] = useState<PlacesInterface>(null);
  const [errorText, setErrorText] = useState<string>(null);

  const places = usePlaces(queryEnabled, selectedCity.id);

  useEffect(() => {
    if (id && places.isSuccess) {
      const found = places.data.find((place: PlacesInterface) => {
        return place.ID + '' === id;
      });
      if (found) {
        setPlace(found);
      } else {
        setErrorText('Location is not found');
      }
    }
  }, [places, id]);

  if (errorText) {
    return <div className="error">{t(errorText)}</div>;
  }
  if (places.isError) {
    return <div className="error">{t('Something went wrong...')}</div>;
  }
  return (
    <>
      {places.isLoading && <div className="small">{t('Loading...')}</div>}
      {places.isSuccess && place && (
        <>
          <div className={styles['container']}>
            <Link href="/">
              <h1>{`< ${place.title}`}</h1>
            </Link>
          </div>
          <MapIt points={place.points} />
        </>
      )}
    </>
  );
}

export default Trail;
