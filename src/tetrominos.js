export const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0' },
  F: {
    shape: [
      [0, 'F', 0],
      ['F', 'F', 0],
      [0, 'F', 'F']
    ],
    color: '223, 173, 36',
    emoji: 'https://i.ibb.co/qpx1QL2/wow.png'
  },
  I: {
    shape: [
      [0, 0, 'I', 0, 0],
      [0, 0, 'I', 0, 0],
      [0, 0, 'I', 0, 0],
      [0, 0, 'I', 0, 0],
      [0, 0, 'I', 0, 0]
    ],
    color: '80, 227, 230',
    emoji: 'https://i.ibb.co/CwMxk0F/smiley.png'
  },
  L: {
    shape: [
      ['L', 0, 0],
      ['L', 0, 0],
      ['L', 'L', 'L']
    ],
    color: '223, 173, 36',
    emoji: 'https://i.ibb.co/Pc3X0RJ/sad.png'
  },
  N: {
    shape: [
      [0, 0, 'N', 0],
      [0, 'N', 'N', 0],
      [0, 'N', 0, 0],
      [0, 'N', 0, 0]
    ],
    color: '223, 173, 36',
    emoji: 'https://i.ibb.co/KFSbNSC/blush.png'
  },
  P: {
    shape: [
      ['P', 'P', 'P'],
      ['P', 'P', 0],
      [0, 0, 0]
    ],
    color: '223, 217, 36',
    emoji: 'https://i.ibb.co/cC3wdrQ/sunglasses.png'
  },
  T: {
    shape: [
      [0, 'T', 0],
      [0, 'T', 0],
      ['T', 'T', 'T']
    ],
    color: '223, 173, 36',
    emoji: 'https://i.ibb.co/FgjtCXm/tears-laughing.png'
  },
  U: {
    shape: [
      ['U', 0, 'U'],
      ['U', 'U', 'U'],
      [0, 0, 0]
    ],
    color: '223, 173, 36',
    emoji: 'https://i.ibb.co/374MbmM/thinking.png'
  },
  V: {
    shape: [
      ['V', 0, 0],
      ['V', 0, 0],
      ['V', 'V', 'V']
    ],
    color: '223, 173, 36',
    emoji: 'https://i.ibb.co/J7S1xR7/scared.png'
  },
  W: {
    shape: [
      [0, 'W', 'W'],
      ['W', 'W', 0],
      ['W', 0, 0]
    ],
    color: '48, 211, 56',
    emoji: 'https://i.ibb.co/ftrzHH5/wink-Emoji.png'
  },
  X: {
    shape: [
      [0, 'X', 0],
      ['X', 'X', 'X'],
      [0, 'X', 0]
    ],
    color: '132, 61, 198',
    emoji: 'https://i.ibb.co/xHghkTV/angry.png'
  },
  Y: {
    shape: [
      [0, 0, 0, 0],
      [0, 'Y', 0, 0],
      ['Y', 'Y', 'Y', 'Y'],
      [0, 0, 0, 0]
    ],
    color: '227, 78, 78',
    emoji: 'https://i.ibb.co/8cCvT5P/geek.png'
  },
  Z: {
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 0],
      [0, 'Z', 'Z']
    ],
    color: '36, 95, 223',
    emoji: 'https://i.ibb.co/cFB0Sm0/silly.png'
  },
  M: {
    shape: [['M']],
    color: '227, 78, 78',
    emoji: 'https://i.ibb.co/X5HXZpS/rainbowpoop-Emoji.png'
  }
};

export const randomTetromino = () => {
  const tetrominos = 'FILNPTUVWXYZ';
  let randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  if (Math.random() <= 0.05) {
    randTetromino = 'M';
  }
  return TETROMINOS[randTetromino];
};
