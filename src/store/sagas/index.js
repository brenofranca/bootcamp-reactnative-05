import { all, takeLatest } from 'redux-saga/effects';

import { addRepositoryRequest } from './repositories';
import { Types as RepositoryTypes } from '~/store/ducks/repositories';

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoryTypes.ADD_REPOSITORY_REQUEST, addRepositoryRequest),
  ]);
}
