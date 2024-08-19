import { createActionGroup, props, createAction } from '@ngrx/store';

export const loadCountryStart = createAction(
  '[LANDING PRINCIPAL] Loading items'
);

export const loadCountryComplete = createAction(
  '[LANDING PRINCIPAL] items loaded',
  props<any>()
);
export const addSelectedCountry = createAction(
  '[LANDING PRINCIPAL] sended one more selected country',
  props<any>()
);
export const selectedCountryCount = createAction(
  '[LANDING PRINCIPAL] count of countrys modified',
  props<any>()
);
