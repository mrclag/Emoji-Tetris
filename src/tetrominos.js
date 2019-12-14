export const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0' },
  I: {
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0]
    ],
    color: '80, 227, 230',
    emoji: 'https://i.ibb.co/4ZT0y40/smiley-Emoji.png'
  },
  J: {
    shape: [
      [0, 'J', 0],
      [0, 'J', 0],
      ['J', 'J', 0]
    ],
    color: '36, 95, 223',
    emoji: 'https://i.ibb.co/0KfKkmB/madEmoji.png'
  },
  L: {
    shape: [
      [0, 'L', 0],
      [0, 'L', 0],
      [0, 'L', 'L']
    ],
    color: '223, 173, 36',
    emoji: 'https://i.ibb.co/sJXtMSn/silly-Emoji.png'
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O']
    ],
    color: '223, 217, 36',
    emoji: 'https://i.ibb.co/WcRpDxY/tears-Emoji.png'
  },
  S: {
    shape: [
      [0, 'S', 'S'],
      ['S', 'S', 0],
      [0, 0, 0]
    ],
    color: '48, 211, 56',
    emoji: 'https://i.ibb.co/ggqbvC1/wink-Emoji.png'
  },
  T: {
    shape: [
      [0, 0, 0],
      ['T', 'T', 'T'],
      [0, 'T', 0]
    ],
    color: '132, 61, 198',
    emoji: 'https://i.ibb.co/7pRdwP3/thinking-Emoji.png'
  },
  Z: {
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
      [0, 0, 0]
    ],
    color: '227, 78, 78',
    emoji: 'https://i.ibb.co/18RngZb/Sad-Face-Emoji-grande.png'
  },
  P: {
    shape: [['P']],
    color: '227, 78, 78',
    emoji: 'https://i.ibb.co/X5HXZpS/rainbowpoop-Emoji.png'
  }
};

export const randomTetromino = () => {
  const tetrominos = 'IJLOSTZP';
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
