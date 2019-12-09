import React, { useState, useEffect } from 'react';

import firebase from '../firebase.js';

import { HighscoreWrapper } from './styles/Highscores.styles';

const useScores = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('highscores')
      .orderBy('score', 'desc')
      .limit(10)
      .onSnapshot(snapshot => {
        const newScores = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setScores(newScores);
      });
  }, []);
  return scores;
};

const Highscores = () => {
  const scores = useScores();
  return (
    <HighscoreWrapper>
      <h2>High Scores</h2>
      <ol>
        {scores.map((score, i) => (
          <li key={score.id} style={{ justifyContent: 'space-between' }}>
            <span>{score.username}:</span>
            <span style={{ float: 'right' }}>{score.score}</span>
          </li>
        ))}
      </ol>
    </HighscoreWrapper>
  );
};

export default React.memo(Highscores);
