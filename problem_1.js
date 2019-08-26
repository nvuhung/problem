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

/*
  Time Complexity: O(n^2)
  Space Complexity: O(1)
 */

const grid = [[0, 16, 255], [8, 128, 32], [0, 0, 0]];
const k = 1;

console.log(rotate(grid, k));