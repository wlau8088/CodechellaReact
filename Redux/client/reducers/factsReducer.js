/**
 * ************************************
 *
 * @module  factsReducer.js
 * @author Wai Fai
 * @date 12/26/2020
 * @description Stores all of our facts reducers
 * @used in index.js of the same folder (reducers folder)
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  catFacts: [
    'Cats can jump up to six times their length.',
    'Cats have whiskers on the backs of their front legs, as well.',
    'Cats typically sleep for 12 to 16 hours a day.',
  ],
  catFactField: '',
  potatoFacts: [
    'Potatoes are 80% water.',
    'The potato originated in the region of southern Peru',
    'The world’s largest potato producing country is China.',
  ],
  potatoFactField: '',
};

const factReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CAT_FACT:
      const newCatFactArr = state.catFacts.slice();
      newCatFactArr.push(state.catFactField);
      return { ...state, catFacts: newCatFactArr, catFactField: '' };

    case types.UPDATE_CAT_FACT_FIELD:
      return { ...state, catFactField: action.payload };

    case types.ADD_POTATO_FACT:
      const newPotatoFactArr = state.potatoFacts.slice();
      newPotatoFactArr.push(state.potatoFactField);
      return { ...state, potatoFacts: newPotatoFactArr, potatoFactField: '' };

    case types.UPDATE_POTATO_FACT_FIELD:
      return { ...state, potatoFactField: action.payload };

    default:
      return state;
  }
};

export default factReducer;
