import { assert, expect } from 'chai';
import checkBooking from '../src/problem_4';
import rotate from '../src/problem_1';

describe('Problem', function() {
  context('Problem 1: Rotate picture', function() {
    it('should rotated with same expected', function() {
      const grid = [[0, 16, 255], [8, 128, 32], [0, 0, 0]];
      const k = 1;

      const rotated = rotate(grid, k);
      const expected = [[0, 8, 0], [0, 128, 16], [0, 32, 255]];

      expect(expected).to.eql(rotated);
    });

    it('should same with input when k divisible by 4', function() {
      const grid = [[0, 16, 255], [8, 128, 32], [0, 0, 0]];
      const k = 4;

      const rotated = rotate(grid, k);

      expect(grid).to.eql(rotated);
    });

    it('should rotated with same expected when k is 2', function() {
      const grid = [[0, 16, 255], [8, 128, 32], [0, 0, 0]];
      const k = 2;

      const expected = [[0, 0, 0], [32, 128, 8], [255, 16, 0]];

      const rotated = rotate(grid, k);

      expect(expected).to.eql(rotated);
    });
  });

  context('Problem 4: Hotel Reservation', function() {
    it('should return false when the rooms does not enough', function() {
      const arrivals = [1, 3, 5];
      const departures = [2, 6, 10];
      const k = 1;
      const checked = checkBooking(arrivals, departures, k);
      assert.equal(false, checked);
    });

    it('should return true when the rooms are enough', function() {
      const arrivals = [1, 3, 5];
      const departures = [2, 6, 10];
      const k = 2;
      const checked = checkBooking(arrivals, departures, k);
      assert.equal(true, checked);
    });
  });
});
