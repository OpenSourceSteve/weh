/**
 * Performs element-wise <= check on 2 arrays of numbers
 * @param {number[]} cost - array of numbers
 * @param {number[]} budget - array of numbers
 * @returns {number[]} Returns false if ANY element of cost array is greater than any element of budget array
 * @example
 * // returns true
 * isCountsSatisfied([0, 1], [2, 3])
 * @example
 * // returns false
 * isCountsSatisfied([2, 1], [1, 2])
 */
export function elementwiseLessThanOrEqualTo(cost: number[], budget: number[]): boolean {
    if (cost.length !== budget.length) {
        throw new Error("Input arrays must contain the same number of elements.");
    }

    let predicate = true

    // perform pairwise comparison of each array's elements
    // return false if ANY element of cost array is greater than any element of budget array
    cost.forEach((value: number, index: number) => {
        if (cost[index] > budget[index]) {
            predicate = false
        }
    })

    return predicate
}