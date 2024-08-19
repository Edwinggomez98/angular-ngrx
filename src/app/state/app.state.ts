import { ActionReducerMap } from '@ngrx/store';
import { CountryState } from '../models/country.state';
import {
  countryReducer,
  selectedCountrys,
  selectedCountrysCount,
} from './reducers/country.reducer';

export interface AppState {
  country: CountryState;
  selectedCountrys: CountryState;
  selectedCountrysCount: CountryState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  country: countryReducer,
  selectedCountrys: selectedCountrys,
  selectedCountrysCount: selectedCountrysCount,
};
