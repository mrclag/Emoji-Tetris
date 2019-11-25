import React from 'react';
import right from '../img/right.png';
import left from '../img/left.png';
import down from '../img/down.png';
import rotate from '../img/rotate-right.png';

import { ControlButton, ControlWrapper } from './styles/ControlPanel.styles';

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
      <ControlButton src={left} alt="left" onClick={() => movePlayer(-1)} />
      <ControlButton
        src={down}
        alt="down"
        onClick={() => {
          dropPlayer();
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
