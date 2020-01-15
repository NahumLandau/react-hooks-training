import React, { memo } from 'react';

import './SearchInput.css';

const SearchInput = props => {
    const { textChange, searchQuery } = props;
    // const handleChange = (event) => textChange(event);
    console.log('rendering SearchInput', searchQuery);

    return (
        <div className="component-search-input">
            <div>
                <input onChange={textChange} value={searchQuery} />
            </div>
        </div>
    );
};
export default memo(SearchInput);
