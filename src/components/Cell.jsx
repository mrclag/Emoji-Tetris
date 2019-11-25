import React from 'react';
import { StyledCell } from './styles/Cell.styles';
import { TETROMINOS } from '../tetrominos';

// React.memo makes sure we only re-render the changed cells
const Cell = ({ type }) => (
  <StyledCell
    type={type}
    color={TETROMINOS[type].color}
    emoji={TETROMINOS[type].emoji}
  ></StyledCell>
);

export default React.memo(Cell);
