import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CountryState } from '../../models/country.state';

export const selectCountryFeature = (state: AppState) => state.country;
export const selectSelectedCountry = (state: AppState) =>
  state.selectedCountrys;
export const selectSelectedCountryCount = (state: AppState) =>
  state.selectedCountrysCount;

export const selectCountryFeatureCount = createSelector(
  selectCountryFeature,
  (state: CountryState) => state.data
);
export const selectLoadingCountry = createSelector(
  selectCountryFeature,
  (state: CountryState) => state.loading
);
export const selectSelectedCountrys = createSelector(
  selectSelectedCountry,
  (state: CountryState) => state.data
);
export const selectSelectedCountrysCount = createSelector(
  selectSelectedCountryCount,
  (state: CountryState) => state.data
);
