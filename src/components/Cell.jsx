import React from 'react';
import { StyledCell } from './styles/Cell.styles.js';
import { TETROMINOS } from '../tetrominos.js';

const Cell = ({ type }) => {
  return <StyledCell type={type} color={TETROMINOS[type].color} />;
};

export default Cell;
