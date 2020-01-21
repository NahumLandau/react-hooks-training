import React, { useMemo } from 'react';
import { useStore } from '../../../store';
import actions from '../../../store/actions';

const ResultLimit = () => {
  const [store, dispatch] = useStore();
  const { maxResults } = store;

  return useMemo(() => (
    <>
      <select id="limit" value={maxResults} onChange={(event) => dispatch(actions.onMaxResultsChanged(event.target.value))}>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
      </select>
    </>
  ), [maxResults]);
};

export default ResultLimit;
