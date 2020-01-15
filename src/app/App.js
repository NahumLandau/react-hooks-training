import React, { useMemo, useState, useEffect, useCallback } from 'react';
import Header from '../header/Header';
import SearchInput from '../searchInput/SearchInput';
import EmojiResults from '../emojiResults/EmojiResults';
import filterEmoji from '../filterEmoji';

const filter = filterEmoji(20);

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredEmoji, setFilteredEmoji] = useState([]);

    useEffect(() => {
        setFilteredEmoji(filter(searchQuery));
    }, [searchQuery]);

    const handleSearchCahanged = useCallback(event => {
        setSearchQuery(event.target.value);
    }, []);

    return (
        <div>
            <Header />
            <SearchInput searchQuery={searchQuery} textChange={handleSearchCahanged} />
            <EmojiResults emojiData={filteredEmoji} />
        </div>
    );
};
export default App;
