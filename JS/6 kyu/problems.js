// 6 kyu | Your order, please

function order(words) {
  return words.split(" ").sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(" ");
}

words = "Thi2s i5s 3a t7est se9ntence ok1ay";
console.log(order(words));

// split into array, regex to find digit, sort by number. tada!
