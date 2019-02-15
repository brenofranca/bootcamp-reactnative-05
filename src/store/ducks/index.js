import { combineReducers } from 'redux';

import modal from './modal';
import repositories from './repositories';

export default combineReducers({
  modal,
  repositories,
});
