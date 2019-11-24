import React, { useState } from 'react';

import { createStage } from '../gameHelpers';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

import { StyledTetrisWrapper, StyledTetris } from './styles/Tetris.styles';

import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

const Tetris = ({ type }) => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log('re-render');
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}

          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
