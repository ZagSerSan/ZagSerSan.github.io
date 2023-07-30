export const winCombination = (allValues) => {
  if (
    // X - rows
    (allValues[0] === 'X' && allValues[1] === 'X' && allValues[2] === 'X') ||
    (allValues[3] === 'X' && allValues[4] === 'X' && allValues[5] === 'X') ||
    (allValues[6] === 'X' && allValues[7] === 'X' && allValues[8] === 'X') ||
    // X - cols
    (allValues[0] === 'X' && allValues[3] === 'X' && allValues[6] === 'X') ||
    (allValues[1] === 'X' && allValues[4] === 'X' && allValues[7] === 'X') ||
    (allValues[2] === 'X' && allValues[5] === 'X' && allValues[8] === 'X') ||
    // X - пересечение
    (allValues[0] === 'X' && allValues[4] === 'X' && allValues[8] === 'X') ||
    (allValues[2] === 'X' && allValues[4] === 'X' && allValues[6] === 'X')
  ) {
    // console.log('X - is win!')
    return 'X'
  } else if (
    // O - rows
    (allValues[0] === 'O' && allValues[1] === 'O' && allValues[2] === 'O') ||
    (allValues[3] === 'O' && allValues[4] === 'O' && allValues[5] === 'O') ||
    (allValues[6] === 'O' && allValues[7] === 'O' && allValues[8] === 'O') ||
    // O - cols
    (allValues[0] === 'O' && allValues[3] === 'O' && allValues[6] === 'O') ||
    (allValues[1] === 'O' && allValues[4] === 'O' && allValues[7] === 'O') ||
    (allValues[2] === 'O' && allValues[5] === 'O' && allValues[8] === 'O') ||
    // O - пересечение
    (allValues[0] === 'O' && allValues[4] === 'O' && allValues[8] === 'O') ||
    (allValues[2] === 'O' && allValues[4] === 'O' && allValues[6] === 'O')
  ) {
    // console.log('O - is win!')
    return 'O'
  }
}