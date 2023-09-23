import {describe, expect, test} from '@jest/globals';
import { getLetterCounts } from '../functions/getLetterCounts';

describe('getLetterCounts', () => {
  test('returns letter counts from an input string', () => {
    expect(getLetterCounts("Good morning")).toEqual([0, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0, 0, 1, 2, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});