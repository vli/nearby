export type PropertyType = {
    stroke: string;
    'stroke-width': string;
    'stroke-opacity': string;
  };
  
  export type GeometryType = {
    type: 'LineString'; // Colud it be something else?
    coordinates: [number, number][];
  };
  
  export interface FeatureInterface {
    type: 'Feature'; // Colud it be something else?
    properties: [PropertyType] | [];
    geometry: GeometryType;
  }
  
  export interface RouteInterface {
    type: 'FeatureCollection'; // Could it be something else?
    features: FeatureInterface[];
  }
  
  export interface PointInterface {
    locationPoint: {
      lat: string;
      lng: string;
      pointInfo: string;
    };
  }
  
  export interface PlacesInterface {
    ID: number;
    title?: string;
    url?: string;
    routes?: RouteInterface[] | [];
    points?: PointInterface[] | [];
  }
  