import React from 'react';

import SearchInput from './searchInput/SearchInput';
import EmojiResultsLimit from './searchLimit';
import './index.css';

const SearchContainer = () => (
  <div id="search-container">
    <SearchInput />
    <EmojiResultsLimit />
  </div>
);
export default SearchContainer;
