// 7 Kyu | Anagram Detection

var isAnagram = function(test, original) {
    return test.toLowerCase().split("").sort().join("") == original.toLowerCase().split("").sort().join("");
  };
  