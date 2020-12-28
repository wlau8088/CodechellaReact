// import action type constants

import * as types from '../constants/actionTypes';

// Add cat fact action creator
export const addCatFact = () => ({
  type: types.ADD_CAT_FACT,
});

// Update cat fact input field action creator
export const updateCatFactField = (factInput) => ({
  type: types.UPDATE_CAT_FACT_FIELD,
  payload: factInput,
});

// Add potato fact action creator
export const addPotatoFact = () => ({
  type: types.ADD_POTATO_FACT,
});

// Add potato fact input field action creator
export const updatePotatoFactField = (factInput) => ({
  type: types.UPDATE_POTATO_FACT_FIELD,
  payload: factInput,
});
