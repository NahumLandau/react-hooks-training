import React from 'react';
import './EmojiResultRow.css';
import { Link, useLocation } from 'react-router-dom';

const EmojiResultsRow = (props) => {
  const { symbol, title } = props;
  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
  const location = useLocation();

  return (
    <div className="component-emoji-result-row">
      <Link
        to={{
          pathname: `/emoji/${title}`,
          state: { background: location, title, symbol: src },
        }}
      >
        <img alt={title} src={src} />
        <span className="title">{title}</span>
      </Link>
    </div>
  );
};

export default EmojiResultsRow;
