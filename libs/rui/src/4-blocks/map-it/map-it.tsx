import styles from './map-it.module.scss';

import mapboxgl from 'mapbox-gl';
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  Popup,
} from 'react-map-gl';

import IconPin from '../../2-elements/icons/icon-pin';

import { useMemo, useState, useEffect } from 'react';
import { PointInterface } from '@tonearby/rdata';
import parse from 'html-react-parser';

const helsinkiCoordinates = {
  lat: 60.192059,
  lng: 24.945831,
};
const MAPBOX_TOKEN =
  'pk.eyJ1IjoidmxpLWlraSIsImEiOiJjbGhsdWQ0cGQwMDdnM2NuZ2c3MjBvNTE1In0.hV9HNUoIm944j1ylrv5c7g';

/* eslint-disable-next-line */
export interface MapItInterface {
  points: PointInterface[];
}

type PopupInfo = {
  latitude: number;
  longitude: number;
  pointInfo: string;
};

type InitialView = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export function MapIt({ points }: MapItInterface) {
  const [popupInfo, setPopupInfo] = useState<PopupInfo | null>(null);
  const [initialViewState, setInitialViewState] = useState<InitialView | null>(
    null
  );

  useEffect(() => {
    if (points[0]?.locationPoint) {
      setInitialViewState({
        ...initialViewState,
        latitude: Number(points[0].locationPoint.lat),
        longitude: Number(points[0].locationPoint.lng),
        zoom: 14,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points]);

  const pins = useMemo(
    () =>
      points.map((point, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={Number(point.locationPoint.lng)}
          latitude={Number(point.locationPoint.lat)}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo({
              longitude: Number(point.locationPoint.lng),
              latitude: Number(point.locationPoint.lat),
              pointInfo: point.locationPoint.pointInfo || '',
            });
          }}
        >
          <IconPin />
        </Marker>
      )),
    [points]
  );

  return (
    <div className={styles['container']}>
      {initialViewState && (
        <Map
          mapLib={mapboxgl}
          initialViewState={initialViewState}
          style={{
            width: 'calc(100vw - 1rem)',
            height: '75vh',
            overflow: 'scroll',
          }}
          mapStyle="mapbox://styles/mapbox/outdoors-v12"
          //interactiveLayerIds={['sf-neighborhoods-fill']}
          // onClick={onClick}
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />
          {pins}

          {popupInfo && (
            <Popup
              anchor="left"
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              onClose={() => setPopupInfo(null)}
            >
              {parse(popupInfo.pointInfo)}
            </Popup>
          )}
        </Map>
      )}
    </div>
  );
}

export default Map;
