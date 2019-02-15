export const Types = {
  OPEN_MODAL: 'modal/OPEN_MODAL',
  CLOSE_MODAL: 'modal/CLOSE_MODAL',
};

const INITIAL_STATE = {
  visible: false,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return { ...state, visible: action.payload.visible || true };
    case Types.CLOSE_MODAL:
      return { ...state, visible: action.payload.visible || false };
    default:
      return state;
  }
}

export const Creators = {
  openModal: visible => ({
    type: Types.OPEN_MODAL,
    payload: {
      visible,
    },
  }),

  closeModal: visible => ({
    type: Types.CLOSE_MODAL,
    payload: {
      visible,
    },
  }),
};
