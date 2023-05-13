import styles from './map-hel.module.scss';

// import mapboxgl from 'mapbox-gl';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';


import ControlPanel from './control-panel';
import Pin from './pin';
import {useState} from 'react';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoidmxpLWlraSIsImEiOiJjbGhsdWQ0cGQwMDdnM2NuZ2c3MjBvNTE1In0.hV9HNUoIm944j1ylrv5c7g';

/* eslint-disable-next-line */
export interface MapHelProps {}

export function MapHel(props: MapHelProps) {

  const helsinkiCoordinates = {
    lat: 60.192059, 
    lng: 24.945831
  };
  //const url = "<https://tiles.hel.ninja/styles/hel-osm-bright/{z}/{x}/{y}@2x@fi.png>"" // use the name of your preferred style here

  /*
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
*/
  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <div className={styles['container']}>
      <Map
      initialViewState={{
        latitude: helsinkiCoordinates.lat,
        longitude: helsinkiCoordinates.lng,
        zoom: 10,
        //bearing: 0,
        //pitch: 0
      }}
      style={{width: '90vw', height: '75vh'}}
      mapStyle="mapbox://styles/mapbox/outdoors-v12"
      mapboxAccessToken={MAPBOX_TOKEN}
    >      
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

      <Marker longitude={60.192059} latitude={24.945831} color="red"/>
      {/* popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo.city}, {popupInfo.state} |{' '}
              <a
                target="_new"
                href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
              >
                Wikipedia
              </a>
            </div>
            <img width="100%" src={popupInfo.image} />
          </Popup>
      ) */}
    </Map>
    <ControlPanel />
    
    </div>
  );
}

export default Map;
