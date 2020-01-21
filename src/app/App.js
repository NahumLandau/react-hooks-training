import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './header/Header';
import SearchContainer from './search';
import EmojiResults from './results';


const App = () => (
  <Router>
    <Header />
    <SearchContainer />
    <EmojiResults />
  </Router>
);
export default App;
