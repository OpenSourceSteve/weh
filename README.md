# The Challenge

Write a function that accepts a single string as input, and that returns a list of English words that can be created using some combination of the letters in the input string.

Example input: "oogd"
Example output: ["good", "god", "dog", "goo", "do", "go"]

# My Approach

There are 2 approaches you can take to solving this problem.

One approach is to generate all possible combinations of each subset of letters provided and then check it against the provided dictionary.  For the example string 'abc', this would result in

a
b
c
ab
ac
ba
bc
ca
cb
abc
acb
bac
bca
cab
cba

For an input string of length $n$, there are $2^n$ possible subsets.  And for each subset of length $m$,  there are $m!$ possible combinations of letters. So, in the worst case (assuming there are no duplicate letters in the input string), there are an exponential number of possible combinations to check. This is not a practical approach for input strings longer than just a few letters.

The second approach is to check each word in the dictionary and see if it can be composed from the letters in the input string provided.  This can be done by counting the number of occurances of each letter (a-z) in each dictionary word and comparing those letter counts to the letter counts of the input string.  If the input string has at least as many of each letter contained by the diction word, then that dictionary word can be add to the list of composable words.  This is the approach I have taken in my solution.  This approach scales with respect to the number of entries in the dictionary and length of the input string.  The function [getComposableWords](/src/functions/getComposableWords.ts) implements this approach.
