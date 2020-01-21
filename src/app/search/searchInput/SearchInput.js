import React, { memo, useEffect, useMemo } from 'react';

import filterEmoji from '../../../helpers/filterEmoji';
import { useStore } from '../../../store';
import actions from '../../../store/actions';
import './SearchInput.css';


const SearchInput = () => {
  const [store, dispatch] = useStore();
  const { searchQuery, maxResults } = store;

  useEffect(() => {
    const emojies = filterEmoji(searchQuery, maxResults);
    dispatch(actions.onEmojiesFiltered(emojies));
  }, [searchQuery, maxResults]);

  return useMemo(() => (
    <div className="component-search-input">
      <div>
        <input
          onChange={(event) => dispatch(actions.onQueryChanged(event.target.value))}
          value={searchQuery}
        />
      </div>
    </div>
  ), [searchQuery]);
};
export default memo(SearchInput);
