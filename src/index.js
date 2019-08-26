import rotate from './problem_1';
import checkBooking from './problem_4';

/**
 * Problem 1: Rotate picture
 */
const runProblem1 = () => {
  console.log('Run Problem 1: Rotate picture');

  // Input
  const grid = [[0, 16, 255], [8, 128, 32], [0, 0, 0]];
  const k = 1;

  // Output
  const rotated = rotate(grid, k);

  console.log(rotated);
};

/**
 * Problem 4: Hotel Reservation
 */
const runProblem4 = () => {
  console.log('\nRun Problem 4: Hotel Reservation');

  // Input
  const arrivals = [1, 3, 5];
  const departures = [2, 6, 10];
  const k = 1;

  // Output
  const checked = checkBooking(arrivals, departures, k);

  console.log(checked);
};

runProblem1();
runProblem4();