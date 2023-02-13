function rot13(message) {
  return message
    .split("")
    .map((char) => {
      num = char.charCodeAt();
      if (num >= 97 && num <= 109) return String.fromCharCode(num + 13);
      else if (num >= 110 && num <= 122) return String.fromCharCode(num - 13);
      else if (num >= 65 && num <= 77) return String.fromCharCode(num + 13);
      else if (num >= 78 && num <= 90) return String.fromCharCode(num - 13);
      else return char;
    })
    .join("");
}

console.log(rot13("testing"));
