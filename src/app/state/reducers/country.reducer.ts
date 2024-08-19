import { createReducer, on } from '@ngrx/store';
import {
  addSelectedCountry,
  selectedCountryCount,
  loadCountryComplete,
  loadCountryStart,
} from '../actions/country.actions';
import { CountryState } from '../../models/country.state';

export const initialStateCountry: CountryState = {
  loading: false,
  data: [],
};

export const countryReducer = createReducer(
  initialStateCountry,
  on(loadCountryStart, (state) => {
    return { ...state, loading: true };
  }),
  on(loadCountryComplete, (state, { data }) => {
    return { ...state, loading: false, data };
  })
);

export const selectedCountrys = createReducer(
  initialStateCountry,
  on(addSelectedCountry, (state, { data }) => {
    return { ...state, loading: false, data };
  }),
  on(selectedCountryCount, (state, { data }) => {
    return { ...state, loading: false, data };
  })
);
export const selectedCountrysCount = createReducer(
  initialStateCountry,
  on(selectedCountryCount, (state, { data }) => {
    return { ...state, loading: false, data };
  })
);
