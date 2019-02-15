import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as RepositoriesCreators } from '~/store/ducks/repositories';

export function* addRepositoryRequest(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repoName}`);

    const repositories = yield select(state => state.repositories.data);

    const coordinates = yield select(state => state.repositories.cooordinates);

    if (repositories.find(repository => repository.id === data.id)) {
      yield put(RepositoriesCreators.addRepositoryFailure('O repositório já foi adicionado.'));
      return;
    }

    const repository = {
      login: data.login,
      id: data.id,
      avatar_url: data.owner.avatar_url,
      url: data.url,
      coordinates,
    };

    yield put(RepositoriesCreators.addRepositorySuccess(repository));
  } catch (error) {
    yield put(RepositoriesCreators.addRepositoryFailure('O repositório não foi encontrado.'));
  }
}
