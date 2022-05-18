function countSmileys(arr) {
  smiles = 0;
  arr.forEach((str) => {
    if (str[0] == ":" || str[0] == ";") {
      if (str[1] == ")" || str[1] == "D") {
        smiles++;
      } else {
        if (str[1] == "-" || str[1] == "~") {
          if (str[2] == ")" || str[2] == "D") {
            smiles++;
          }
        }
      }
    }
  });
  return smiles;
}

smiles = [";]", ":[", ";*", ":$", ";-D"];
console.log(countSmileys(smiles));
