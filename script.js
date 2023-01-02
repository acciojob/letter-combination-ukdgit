mappings = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};


function letterCombinations(input_digit) {
   if (digits === '') { return []; }

  const strDigits = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const combine = (cur, n) => cur.length === digits.length 
    ? cur
    : [...strDigits[digits[n]]].flatMap(x => combine(cur + x, n + 1));

  return combine('', 0);
}

module.exports = letterCombinations;

