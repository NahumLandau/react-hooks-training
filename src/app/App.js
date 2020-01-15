import React, { memo, useState } from 'react';
import Header from '../header/Header';
import SearchInput from '../searchInput/SearchInput';
import EmojiResults from '../emojiResults/EmojiResults';
import filterEmoji from '../filterEmoji';


const App = () => {
  const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji('', 20));
  const handleSearchChange = (event) => setFilteredEmoji(filterEmoji(event.target.value, 20));

  return (
    <div>
      <Header />
      <SearchInput textChange={handleSearchChange} />
      <EmojiResults emojiData={filteredEmoji} />
    </div>
  );
};
export default memo(App);
