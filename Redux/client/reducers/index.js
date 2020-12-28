/**
 * ************************************
 *
 * @module  index.js
 * @author Wai Fai
 * @date 12/26/2020
 * @description A place to combine reducers in the case where we need multiple reducer files
 * @used in store.js of the client folder
 * ************************************
 */

import { combineReducers } from 'redux';
import factsReducer from './factsReducer';

export default combineReducers({
  facts: factsReducer,
});