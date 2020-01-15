import React, { useEffect } from 'react';
import Clipboard from 'clipboard';

import EmojiResultRow from '../emojiResultsRow/EmojiResultRow';
import './EmojiResults.css';

const EmojiResults = (props) => {
  const { emojiData } = props;

  useEffect(() => {
    const clipboard = new Clipboard('.copy-to-clipboard');
    return () => clipboard.destroy();
  });

  return (
    <div className="component-emoji-results">
      {emojiData.map((emoji) => {
        const { title, symbol } = emoji;
        return (
          <EmojiResultRow
            key={title}
            symbol={symbol}
            title={title}
          />
        );
      })}
    </div>
  );
};

export default EmojiResults;
