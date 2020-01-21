import {
  QUERY_CHANGED, EMOJIES_FILTERED, MAX_RESULTS_CHANGED, LOCATION_CHANGED, MODAL_CLOSED,
} from './actions';

export const initialState = JSON.parse(window.localStorage.getItem('appState')) || {
  searchQuery: '',
  filteredEmoji: [],
  maxResults: 20,
  emojiDescription: '',
  editedModals: {},
};

const reducer = (state = initialState, action) => {
  const { id, text } = action.payload;

  switch (action.type) {
    case QUERY_CHANGED:
      return { ...state, searchQuery: action.payload };
    case EMOJIES_FILTERED:
      return { ...state, filteredEmoji: action.payload };
    case MAX_RESULTS_CHANGED:
      return { ...state, maxResults: action.payload };
    case LOCATION_CHANGED:
      return { ...state, emojiDescription: action.payload };
    case MODAL_CLOSED:
      return { ...state, emojiDescription: '', editedModals: { ...state.editedModals, [id]: { text } } };
    default:
      return state;
  }
};

export default reducer;
