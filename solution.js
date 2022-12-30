function letterCombinations(input_digit) {
 const ans = s
    .split("")
    .map(function (v) {
      return mappings[v] || [""];
    })
    .reduce(function (a, b) {
      var combi = [];
      for (var i = 0; i < a.length; i++)
        for (var j = 0; j < b.length; j++) combi.push(a[i] + b[j]);
      return combi;
    });
  return ans;
}

module.exports = letterCombinations;

