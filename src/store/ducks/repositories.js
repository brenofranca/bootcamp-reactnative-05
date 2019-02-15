export const Types = {
  ADD_REPOSITORY_COORDINATES: 'repositories/ADD_REPOSITORY_COORDINATES',
  ADD_REPOSITORY_REQUEST: 'repositories/ADD_REPOSITORY_REQUEST',
  ADD_REPOSITORY_SUCCESS: 'repositories/ADD_REPOSITORY_SUCCESS',
  ADD_REPOSITORY_FAILURE: 'repositories/ADD_REPOSITORY_FAILURE',
};

const INITIAL_STATE = {
  data: [
    {
      login: 'brenofranca',
      id: 13875096,
      avatar_url: 'https://avatars3.githubusercontent.com/u/13875096?v=4',
      url: 'https://api.github.com/users/brenofranca',
      coordinates: {
        longitude: -38.5912083,
        latitude: -3.806182,
      },
    },
    {
      login: 'mojombo',
      id: 1,
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      url: 'https://api.github.com/users/mojombo',
      coordinates: {
        longitude: -38.5905818,
        latitude: -3.8080508,
      },
    },
  ],
  cooordinates: {
    latitude: 0,
    longitude: 0,
  },
  error: null,
  success: null,
  loading: false,
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REPOSITORY_COORDINATES:
      return { ...state, cooordinates: action.payload.cooordinates };
    case Types.ADD_REPOSITORY_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_REPOSITORY_SUCCESS:
      return {
        ...state,
        cooordinates: {
          ...INITIAL_STATE.cooordinates,
        },
        error: null,
        loading: false,
        success: 'Reposiório adicionado com sucesso',
        data: [...state.data, action.payload.repository],
      };
    case Types.ADD_REPOSITORY_FAILURE:
      return {
        ...state, loading: false, success: null, error: action.payload.message,
      };
    default:
      return state;
  }
}

export const Creators = {
  addRepositoryRequest: repoName => ({
    type: Types.ADD_REPOSITORY_REQUEST,
    payload: {
      repoName,
    },
  }),

  addRepositorySuccess: repository => ({
    type: Types.ADD_REPOSITORY_SUCCESS,
    payload: {
      repository,
    },
  }),

  addRepositoryFailure: message => ({
    type: Types.ADD_REPOSITORY_FAILURE,
    payload: {
      message,
    },
  }),

  addRepositoryCoordinates: cooordinates => ({
    type: Types.ADD_REPOSITORY_COORDINATES,
    payload: {
      cooordinates,
    },
  }),
};
