//// 6 kyu | extract file name

function extractFileName(dirtyFileName) {
  return dirtyFileName
    .split("_")
    .filter((piece, index) => index > 0)
    .join("_")
    .split(".")
    .reverse()
    .filter((piece, index) => index > 0)
    .reverse()
    .join(".");
}

//alternatively

function getFileName(filename) {
  return filename.slice(filename.indexOf("_") + 1, filename.lastIndexOf("."));
}

//////////////////////////////////////////////////////////////////////////////

//// 6 kyu | Meeting

function meeting(s) {
  return (
    "(" +
    s
      .toUpperCase()
      .split(";")
      .map((fulln) => {
        return fulln.split(":").reverse().join(", ");
      })
      .sort()
      .join(")(") +
    ")"
  );
}

//////////////////////////////////////////////////////////////////////////

//// 5 kyu | Play with two Strings

function workOnStrings(a, b) {
  objA = {};
  objB = {};

  a.toLowerCase()
    .split("")
    .forEach((char) => {
      objA[char] ? delete objA[char] : (objA[char] = 1);
    });
  b.toLowerCase()
    .split("")
    .forEach((char) => {
      objB[char] ? delete objB[char] : (objB[char] = 1);
    });
  a = a.split("").map((char) => {
    return objB[char.toLowerCase()] ? (char.charCodeAt() > 90 ? char.toUpperCase() : char.toLowerCase()) : char;
  });
  b = b.split("").map((char) => {
    return objA[char.toLowerCase()] ? (char.charCodeAt() > 90 ? char.toUpperCase() : char.toLowerCase()) : char;
  });

  return a.join("") + b.join("");
}

///////////////////////////////////////////////////////////////////////

////
