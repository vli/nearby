import styles from './index.module.scss';
import parse from 'html-react-parser';

import { Header } from '@tonearby/rui';
import {
  FeatureInterface,
  PlacesInterface,
  PointInterface,
  RouteInterface,
  usePlaces,
} from '@tonearby/rdata';

import Logo from '../../components/logo/logo';
/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const enabled = true;
  const city = '5';
  const places = usePlaces(enabled, city);

  if (places.isSuccess) {
    //debugger
  }

  return (
    <div className={styles['container']}>
      <Header>
        <Logo />
      </Header>
      <h1>Welcome to Home!</h1>
      {places.isLoading && <div className="small">Loading...</div>}
      {places.isError && <div className="error">Something went wrong...</div>}
      {places.isSuccess && (
        <>
          <h2>Places {places.data.length}</h2>

          {places.data.map((place: PlacesInterface) => (
            <>
              <h3>{place.title}</h3>
              <p className='place-url'>{place.url}</p>
              {place.routes.features &&
                place.routes.features.map(
                  (feature: FeatureInterface, index: number) => (
                    <p className='feature' key={`Feature-${index}`}>
                      {JSON.stringify(feature, null, ' ')}
                    </p>
                  )
                )}

              {place.points &&
                place.points.map((point: PointInterface, index: number) => (
                  <div className='point-location' key={`Point-location-${index}`}>
                    <p className='point-location-point' key={`Point-locationPoint-${index}`}>
                      <span>{point.locationPoint.lat}</span>
                      <br/>
                      <span>{point.locationPoint.lng}</span>
                    </p>
                    <p className='point-location-info' key={`Point-locationPoint-pointInfo-${index}`}>
                      {parse(point.locationPoint.pointInfo)}
                    </p>
                    {/*<p key={`Point-${index}`}>
                      {JSON.stringify(point, null, ' ')}
                    </p>*/}
                  </div>
                ))}
            </>
          ))}
          <code>{JSON.stringify(places.data, null, ' ')}</code>
        </>
      )}
    </div>
  );
}

export default Home;
