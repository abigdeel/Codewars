// 6 Kyu | Replace with Alphabet Position

function alphabetPosition(text) {
  return text                                   // return following "text" methods...
    .toLowerCase()                              // to lowercase
    .split("")                                  // split ever char into array
    .map((char) => char.charCodeAt() - 96)      // return ASCII - 96 (alphabet #)
    .filter((char) => char >= 1 && char <= 26)  // return filtered alphabet (1-26)
    .join(" ");                                 // join with spaces again
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
