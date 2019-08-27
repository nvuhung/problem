const flip = grid =>
  grid[0].map((_column, index) => grid.map(row => row[index]));

const rotate = (grid, k) => {
  if (k % 4 === 0) {
    return grid;
  }

  let rotated = flip(grid.reverse());
  for (let i = 1; i < k; i++) {
    rotated = flip(rotated.reverse());
  }
  return rotated;
};

export default rotate;
