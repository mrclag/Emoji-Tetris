import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    // Clear row
    const sweepRows = (newStage) =>
      newStage.reduce((ack, row) => {
        // Check if the row does not contain any 0's
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsCleared((prev) => prev + 1);
          // Add new rows at the top of the stage, to shift down
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return ack;
        }
        // Push the rest of rows onto accumulator, 'below' the ones just added
        ack.push(row);
        return ack;
      }, []);

    const updateStage = (prevStage) => {
      // First flush the stage
      const newStage = prevStage.map((row) =>
        row.map((cell) => {
          if (cell[1] === 'clear') {
            if (cell[2] === true) {
              return ['B', 'clear', false];
            }
            return [0, 'clear'];
          } else {
            return cell;
          }
        })
      );

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });

      // Then check if we got some score if collided
      if (player.collided) {
        resetPlayer();

        const posX = player.pos.x;
        const posY = player.pos.y;
        // If the one collided is the single (poop emoji/rocket)
        if (
          player.tetromino.length === 1 &&
          player.tetromino[0].length === 1 &&
          newStage[posY + 1]
        ) {
          // Clear the rocket
          newStage[posY][posX] = [0, 'clear'];
          if (posX > 0) {
            // '' bottom left
            if (newStage[posY + 1][posX - 1][0] !== 0)
              newStage[posY + 1][posX - 1] = ['B', 'clear', true];
            // '' left
            if (newStage[posY][posX - 1][0] !== 0)
              newStage[posY][posX - 1] = ['B', 'clear', true];
          }
          if (posX < newStage[0].length - 1) {
            // '' bottom right
            if (newStage[posY + 1][posX + 1][0] !== 0)
              newStage[posY + 1][posX + 1] = ['B', 'clear', true];
            // '' right
            if (newStage[posY][posX + 1][0] !== 0)
              newStage[posY][posX + 1] = ['B', 'clear', true];
          }
          // '' bottom mid
          if (newStage[posY + 1][posX][0] !== 0)
            newStage[posY + 1][posX] = ['B', 'clear', true];
        }

        return sweepRows(newStage);
      }
      return newStage;
    };

    // Here are the updates
    setStage((prev) => updateStage(prev));
  }, [
    player.collided,
    player.pos.x,
    player.pos.y,
    player.tetromino,
    resetPlayer,
  ]);

  return [stage, setStage, rowsCleared];
};
