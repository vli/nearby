import create from 'zustand';
import { produce } from 'immer';

enum CityName {
  Helsinki = 'Helsinki',
  Tallinn = 'Tallinn',
}

enum CityId {
  Helsinki = '4661',
  Tallinn = '5273',
}

export interface CityInterface {
  id: string;
  name: string;
}

const cityOptions = [
  { id: CityId.Helsinki, name: CityName.Helsinki },
  { id: CityId.Tallinn, name: CityName.Tallinn },
];

interface TrailStateInterface {
  cityOptions: CityInterface[];
  selectedCity: CityInterface;
  setSelectedCity: (city: CityInterface) => void;
}

export const useTrailStore = create<TrailStateInterface>((set, get) => ({
  cityOptions: cityOptions,
  selectedCity: cityOptions[0],

  // methods for manipulating state
  setSelectedCity: (city: CityInterface) => {
    set(
      produce((state: TrailStateInterface) => {
        state.selectedCity = city;
      })
    );
  },
  // setSelectedLocation: (locationId) => set({ selectedLocationId: locationId }),
  // setSelectedTrail: (trailId) => set({ selectedTrail: trailId }),
}));
