import React from 'react';
import right from '../img/right.png';
import left from '../img/left.png';
import down from '../img/down.png';
import rotate from '../img/rotate-right.png';

import { ControlButton, ControlWrapper } from './styles/ControlPanel.styles';
import { useInterval } from '../hooks/useInterval';

let interval = null;
const ControlPanel = ({
  movePlayer,
  dropPlayer,
  playerRotate,
  stage,
  setDropTime,
  level
}) => {
  return (
    <ControlWrapper>
      <ControlButton
        src={left}
        alt="left"
        onTouchStart={() => {
          interval = setInterval(() => movePlayer(-1), 100);
        }}
        onTouchEnd={clearInterval(interval)}
      />
      <ControlButton
        src={down}
        alt="down"
        onTouchStart={() => {
          console.log(interval);
          interval = setInterval(dropPlayer(), 200);
        }}
        onTouchEnd={() => {
          clearInterval(interval);
          setDropTime(1000 / (level + 1));
        }}
      />
      <ControlButton
        src={rotate}
        alt="rotate"
        onClick={() => playerRotate(stage, 1)}
      />

      <ControlButton src={right} alt="right" onClick={() => movePlayer(1)} />
    </ControlWrapper>
  );
};

export default ControlPanel;
