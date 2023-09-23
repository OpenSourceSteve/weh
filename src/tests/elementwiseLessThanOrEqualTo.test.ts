import {describe, expect, test} from '@jest/globals';
import { elementwiseLessThanOrEqualTo } from '../functions/elementwiseLessThanOrEqualTo';

describe('elementwiseLessThanOrEqualTo', () => {
  test('returns true when appropriate', () => {
    expect(elementwiseLessThanOrEqualTo([0,1,2], [1,2,3])).toEqual(true);
  });

  test('returns false when appropriate', () => {
    expect(elementwiseLessThanOrEqualTo([1,0],[0,1])).toEqual(false);
  });
});