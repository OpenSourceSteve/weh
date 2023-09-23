/**
 * Returns a word's letter count. Does NOT count accented letters.
 * @example
 * // returns [0, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0, 0, 1, 2, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
 * getLetterCounts("Good morning")
 * @returns {Number[]} Returns case-insensitive counts of each letter in input string. Ignores spaces and accented characters.
 */
export function getLetterCounts(input: string): number[] {
    const letterCounts: number[] = Array(26).fill(0);

    const lowercaseInput: string = input.toLowerCase()

    Array.from(lowercaseInput).forEach((letter, index) => {
        const charCode = letter.charCodeAt(0);
        // charCode of 'a' is 97, z is '127'
        if (charCode > 96 && charCode < 128) {
            letterCounts[charCode - 97]++
        }
    })

    return letterCounts;
}