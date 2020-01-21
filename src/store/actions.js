
export const QUERY_CHANGED = 'QUERY_CHANGED';
export const EMOJIES_FILTERED = 'EMOJIES_FILTERED';
export const MAX_RESULTS_CHANGED = 'MAX_RESULTS_CHANGED';
export const LOCATION_CHANGED = 'LOCATION_CHANGED';
export const MODAL_CLOSED = 'MODAL_CLOSED';


const actions = {
  onQueryChanged: (payload) => ({
    type: QUERY_CHANGED,
    payload,
  }),
  onEmojiesFiltered: (payload) => ({
    type: EMOJIES_FILTERED,
    payload,
  }),
  onMaxResultsChanged: (payload) => ({
    type: MAX_RESULTS_CHANGED,
    payload,
  }),
  onLocationChange: (payload) => ({
    type: LOCATION_CHANGED,
    payload: () => {
      if (payload) {
        return payload;
      }
      return fetch('https://api.chucknorris.io/jokes/random')
        .then((res) => res.json())
        .then((json) => json.value);
    },
  }),
};
export default actions;

export const bindActionCreator = (action, dispatch) => dispatch(action);
