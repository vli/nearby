// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import {
  CityInterface,
  PlacesInterface,
  PointInterface,
  usePlaces,
  useTrailStore,
} from '@tonearby/rdata';
import styles from './index.module.scss';
import { IconPin } from '@tonearby/rui';

type LocationType = {
  ID: number;
  name: string;
  url: string;
  coordinates?: [number, number];
};

const LocationCard = ({ ID, name, url, coordinates }: LocationType) => {
  const { t } = useTranslation('common');
  return (
    <article className={styles['location-card']}>
      <Link
        href="[...id]"
        as={`/trail?id=${ID}`}
        aria-describedby={t('Select trail')}
      >
        <hgroup>
          <h2>{name}</h2>
          <IconPin />
        </hgroup>
      </Link>
      <p>
        <a target="_blank" rel="noopener noreferrer" href={url}>
          {`${t('More on Citynature.eu')}  >>`}{' '}
        </a>
      </p>
    </article>
  );
};

/* eslint-disable-next-line */
export interface EventsProps {}

export function Events(props: EventsProps) {
  const { t } = useTranslation('common');

  const [queryEnabled, setQueryEnabled] = useState(true);

  const {
    cityOptions,
    selectedCity,
    setSelectedCity,
    //setSelectedLocation,
  } = useTrailStore();

  const handleCityChange = (city: CityInterface) => {
    setSelectedCity(city);
  };

  const places = usePlaces(queryEnabled, selectedCity.id);

  const trails: LocationType[] = [];

  if (places.isSuccess && trails.length === 0) {
    places.data.map((place: PlacesInterface) => {
      place.points.map((point: PointInterface, index: number) => {
        if (index === 0) {
          trails.push({
            ID: place.ID,
            name: `${place.title}`,
            url: place.url,
            coordinates: [
              Number(point.locationPoint.lat),
              Number(point.locationPoint.lng),
            ],
          });
        }
      });
    });
    console.log(trails);
  }

  return (
    <>
      {places.isLoading && <div className="small">{t('Loading...')}</div>}
      {places.isError && (
        <div className="error">{t('Something went wrong...')}</div>
      )}
      {places.isSuccess && (
        <>
          <div data-theme="dark" className={styles['city-selection']}>
            {cityOptions.map((city) => (
              <button
                key={`city-selection-${city.id}`}
                disabled={city.id === selectedCity.id ? true : false}
                onClick={() => handleCityChange(city)}
              >
                {city.name}
              </button>
            ))}
          </div>

          <h1 className={styles['header']}>{`${t('Nature trails in')} ${
            selectedCity.name
          }`}</h1>

          <section className={styles['locations']}>
            {trails.map((trail: LocationType, index) => (
              <LocationCard
                key={`trail-row-${trail.name}`}
                ID={trail.ID}
                name={trail.name}
                url={trail.url}
                coordinates={trail.coordinates}
              ></LocationCard>
            ))}
          </section>
        </>
      )}
    </>
  );
}
export default Events;
