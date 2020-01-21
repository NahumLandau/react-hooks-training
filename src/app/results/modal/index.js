import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useStore } from '../../../store';

import './index.css';

const Modal = () => {
  const location = useLocation();
  const { title, symbol } = location.state;
  const [store, dispatch] = useStore();
  const { emojiDescription } = store;
  const [modalText, setModaltext] = useState();
  const [isEditing, setModalEditing] = useState(false);
  const currState = useRef();

  useEffect(() => () => {
    dispatch({
      type: 'MODAL_CLOSED', payload: { id: title, text: currState.current },
    });
  }, []);

  const modalTextChanged = (value) => {
    currState.current = value;
    setModaltext(value);
  };

  useEffect(() => {
    modalTextChanged(emojiDescription);
  }, [emojiDescription]);

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h1><img src={symbol} alt={title} /></h1>
        <h3>{title}</h3>
        <p>{emojiDescription}</p>
        <button type="button" onClick={() => setModalEditing(true)}>Edit</button>
        <textarea
          style={{ display: isEditing ? 'block' : 'none' }}
          value={modalText}
          onChange={(event) => modalTextChanged(event.target.value)}
        />
        <Link to="/">Close</Link>
      </div>
    </div>
  );
};
export default Modal;
