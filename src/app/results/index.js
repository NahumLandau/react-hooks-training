import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import EmojiResultRow from './emojiResultsRow/EmojiResultRow';
import './index.css';
import { useStore } from '../../store';
import actions from '../../store/actions';
import Modal from './modal';

const EmojiResults = () => {
  const [store, dispatch] = useStore();
  const { filteredEmoji } = store;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      const modal = Object.keys(store.editedModals).find((m) => m === location.state.title);
      const modalText = modal && store.editedModals[modal].text;
      dispatch(actions.onLocationChange(modalText || null));
    }
  }, [location]);

  return (
    <div className="component-emoji-results">
      {filteredEmoji.map((emoji) => {
        const { title, symbol } = emoji;
        return (
          <EmojiResultRow
            key={title}
            symbol={symbol}
            title={title}
          />
        );
      })}
      <Switch>
        <Route path="/emoji/:id">
          <Modal />
        </Route>
      </Switch>
    </div>
  );
};

export default EmojiResults;
