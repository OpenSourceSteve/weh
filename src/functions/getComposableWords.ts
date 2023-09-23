import { ALL_VALID_ENGLISH_WORDS } from "../ALL_VALID_ENGLISH_WORDS"

import { getLetterCounts } from './getLetterCounts'

import { elementwiseLessThanOrEqualTo } from './elementwiseLessThanOrEqualTo'

/**
 * Returns a list of words composable from the characters of a given input string
 * @param {string} input - unordered string of usable characters
 * @returns {string[]} Returns a list of words composable from the characters of a given input string
 * @example
 * // returns ["do", "dog", "go", "god", "goo", "good"]
 * getLetterCounts("oogd")
 */
function getComposableWords(input: string): string[] {
    const composableWords: string[] = []

    const inputLetterCounts: number[] = getLetterCounts(input)

    let wordLetterCounts: number[]

    ALL_VALID_ENGLISH_WORDS.forEach(word => {
        wordLetterCounts = getLetterCounts(word)

        // if ALL the word's letter counts <= letter counts of the input string, add to list of composable words
        if(elementwiseLessThanOrEqualTo(wordLetterCounts, inputLetterCounts)) {
            composableWords.push(word)
        }
    });

    return composableWords
}

export { getComposableWords }