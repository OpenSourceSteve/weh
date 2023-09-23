import {describe, expect, test} from '@jest/globals';
import { getComposableWords } from '../functions/getComposableWords';

describe('getComposableWords', () => {
  test('returns list of all words composable from input string "OoGd"', () => {
    expect(getComposableWords(" OoGd ")).toEqual(["do", "dog", "go", "god", "goo", "good"]);
  });

  test('returns list of all words composable from input string "OoGdfx"', () => {
    expect(getComposableWords(" OoGdfx ")).toEqual(["do", "dog", "fox", "go", "god", "goo", "good"]);
  });
});