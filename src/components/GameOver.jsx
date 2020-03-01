import React, { useState, useEffect, useRef } from 'react';

import { Modal, ModalBackground } from './styles/GameOver.styles';

import firebase from '../firebase';

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler, ref]); // Empty array ensures that effect is only run on mount and unmount
}

export const GameOver = ({ isOpen, toggle, score, rows, level }) => {
  const ref = useRef();

  useOnClickOutside(ref, () => toggle(false));

  const [name, setName] = useState('');

  const maxAllowedScore = 300000;

  const addScore = score => {
    firebase
      .firestore()
      .collection('highscores')
      .add({
        username: name,
        score: parseInt(score)
      });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (score > maxAllowedScore) {
      console.log('CHEATER');
      alert('CHEATER!!');
    } else {
      addScore(score);
      toggle(false);
    }
  };

  console.log('render');
  return (
    <ModalBackground initialPose="closed" pose={isOpen ? 'open' : 'closed'}>
      <Modal ref={ref}>
        <h1 style={{ color: 'red', fontWeight: '700' }}>GAME OVER</h1>
        <div className="result">
          <div>
            <strong>Score</strong>: {score}
          </div>
          <div>
            <strong>Rows</strong>: {rows}
          </div>
          <div>
            <strong>Level</strong>: {level}
          </div>
          <br />
          <form onSubmit={onSubmit}>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.currentTarget.value)}
              autofocus="true"
              maxLength="14"
            />
            <button className='submit'>Submit</button>
          </form>
        </div>
      </Modal>
    </ModalBackground>
  );
};

export default GameOver;
